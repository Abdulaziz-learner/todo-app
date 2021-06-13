import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

function NewTodo(){
    const [todos, setTodos] = useState([
        {text: 'Ertalab soat 3:30da turishim kerak'},
        {text: 'yuvinishim kerak'},
        {text: 'Namoz o\'qishim kerak kerak'},
        {text: 'Ishlarimni qilishim kerak'}
    ]);
    const [isEdit, setIsEdit] = useState(false);
    const [editTodoId, setEditTodoId] = useState(0);


    const AddTodo = () => {
        if(isEdit === false){
            let textInp = document.querySelector('#taskText').value,
            obj = {text: textInp},
            arr = [];

            todos.map((todo)=>{
                arr.push(todo);
                return true;
            });

            arr.push(obj);

            setTodos(arr);

            document.querySelector('#taskText').value = '';    
        } else {
            todos.map((todo, index)=>{
                if(index === editTodoId){
                    if(todo.text === document.querySelector('#taskText').value){
                        alert('O`zgartirmadingizku!?');
                    } else {
                        let arrTodos = [];
                        todos.map((todo)=>{
                            arrTodos.push(todo);
                            return true
                        });

                        arrTodos.map((todo, index)=> {
                            if(index === editTodoId){
                                todo.text = document.querySelector('#taskText').value;
                            }
                            return true
                        })
                        setTodos(arrTodos);
                        document.querySelector('#taskText').value = '';
                    }
                }
            })
        }
    }


    const  DelTodo = (id) => {
        let arrDel = [];

        todos.map((todo, index)=>{
            index !== id ? arrDel.push(todo) : arrDel.push();
            return true;
        })
        setTodos(arrDel);
    }

    const EditTodo = (id, obj) => {
        document.querySelector('#taskText').value = obj.text;
        setIsEdit(true);
        setEditTodoId(id);
    }

    const CancelEdit = () => {
       setIsEdit(false);
        document.querySelector('#taskText').value = '';
    }

    return(
        <>
        <Container>
                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <div className='p-4 bg-dark d-flex justify-content-around'>
                            <input type='text' id='taskText' className='p-1 w-75 rounded border-0' placeholder='Todo something...' />
                            {
                                isEdit === false ?
                                <Button onClick={()=> AddTodo()} color='info text-white'><i className='fa fa-plus'></i> Add todo</Button>:
                                <Button onClick={()=> AddTodo()} color='info text-white'><i className='fa fa-edit'></i> Edit todo</Button>
                            }
                            {
                                isEdit === true ?
                                <Button onClick={()=> CancelEdit()} color='danger'><i className='fa fa-backspace'></i></Button>:
                                ''
                            }
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <ListGroup>
                            {
                                todos.map((todo, index)=> {
                                    return(
                                        <ListGroupItem className='list_item' key={index}> <span onClick={()=> EditTodo(index, todo)}>{ todo.text }</span> <Button color='danger' onClick={()=>DelTodo(index)}><i className='fa fa-trash'></i></Button></ListGroupItem>
                                    )
                                })
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NewTodo;