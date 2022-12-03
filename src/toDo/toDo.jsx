import React, { useState, useEffect } from "react";
import {FcCancel} from 'react-icons/fc'
import { Btn, Container, FormContainer, InputTask, ItemTask, ListTask } from "./toDoStyles";

export const ToDo = () => {

    const [inputTask, setInputTask] = useState('')
    const [task, setTask] = useState(JSON.parse(localStorage.getItem('task')) || [])

    const isExistingTask = (setTask) => {
        return setTask.find(task => task === inputTask)
    }

    const AddTask = (e) => {
        e.preventDefault();

        if(isExistingTask(task)){
            alert('ya existe esta tarea')
            setInputTask('');
            return;
        } else if(!inputTask.length){
            alert('Porfavor, ingresa una tarea!')
            return;
        } else {
            {
                setInputTask();
                setTask([... task, inputTask]);
                setInputTask('');
            }
        }
        setInputTask('');
    }

    useEffect(() => {
		localStorage.setItem('task', JSON.stringify(task));
	}, [task]);

    const DeleteTaskAll = e => {
        window.confirm('Desea eliminar todas las tareas ?') 
        ? setTask([])
        : setTask();
    }

    const DeleteTask = e => {
      const valueId = e.target.dataset.id
      if(window.confirm('Desea eliminar la tarea?')){
        setTask(task.filter(tareas => tareas !== valueId))
      } else {
        return;
      }
    }

    return (
         <Container>
            <h2>Ingresa una tarea: </h2>
            <FormContainer onSubmit={AddTask}>
                <InputTask value={inputTask} onChange={(e) => setInputTask(e.target.value)} placeholder="Agregar tarea ..." ></InputTask>
                <Btn>Agregar Tarea</Btn>
            </FormContainer>

            <ListTask>
              {task.map(tarea => {
                return <ItemTask key={tarea} >{tarea[0].toUpperCase()+ tarea.substring(1)} <FcCancel onClick={DeleteTask} data-id={tarea}/></ItemTask>
              })}
            </ListTask>
            <Btn onClick={DeleteTaskAll}>Borrar tareas</Btn>
        </Container>
    )
}