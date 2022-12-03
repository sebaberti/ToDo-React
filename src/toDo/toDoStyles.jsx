import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #131415;
width: 100vw;
height: 100vh;
gap: 10px;
color: aliceblue;
`

export const FormContainer = styled.form`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color:black;
gap:10px;
`

export const InputTask = styled.input`
width: 250px;
height:30px;
color:black;
border-radius:5px;
padding-left:10px;
`

export const Btn = styled.button`
width:140px;
height:40px;
border-radius:5px;
cursor:pointer;
font-size:0.9rem;
`

export const ListTask = styled.ul`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
list-style: none;
width:80%;
gap:10px;
`

export const ItemTask = styled.li`
display:flex;
justify-content:space-between;
align-items:center;
color:white;
width:300px;
border:1px solid yellowgreen;
font-size:1.2rem;
padding:5px 5px;
border-radius:10px;
`