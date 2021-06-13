import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

export default class ToDo extends Component {
    constructor(){
        super();
        this.state = {
            todos: [
                {text: 'Ertalab saharlikdan 1soat avval turishim kerak'},
                {text: 'Saharlikka tayyorgarlik ko\'rishim kerak'},
                {text: 'Bomdodgacha televizor tomosha qilishim kerak'},
                {text: 'Bomdodni o\'qib yotib qotib uxlashim kerak'}
            ],
            isEdit: false,
            editTodoId: null,
        }
    }

    AddTodo = () => {
        if(this.state.isEdit === false){
            let textInp = document.querySelector('#taskText').value,
            obj = {text: textInp},
            arr = [];

            this.state.todos.map((todo)=>{
                arr.push(todo);
                return true;
            });

            arr.push(obj);

            this.setState({
                todos: arr
            });

            document.querySelector('#taskText').value = '';    
        } else {
            this.state.todos.map((todo, index)=>{
                if(index === this.state.editTodoId){
                    if(todo.text === document.querySelector('#taskText').value){
                        alert('O`zgartirmadingizku!?');
                    } else {
                        let arrTodos = [];
                        this.state.todos.map((todo)=>{
                            arrTodos.push(todo);
                            return true
                        });

                        arrTodos.map((todo, index)=> {
                            if(index === this.state.editTodoId){
                                todo.text = document.querySelector('#taskText').value;
                            }
                            return true
                        })
                        this.setState({
                            todos: arrTodos
                        });
                        document.querySelector('#taskText').value = '';
                    }
                }
            })
        }
    }

    DelTodo = (id) => {
        let arrDel = [];

        this.state.todos.map((todo, index)=>{
            index !== id ? arrDel.push(todo) : arrDel.push();
            return true;
        })
        this.setState({
            todos: arrDel
        })
    }

    EditTodo = (id, obj) => {
        document.querySelector('#taskText').value = obj.text;
        this.setState({
            isEdit: true,
            editTodoId: id,
        });
    }

    CancelEdit = () => {
        this.setState({
            isEdit: false
        });
        document.querySelector('#taskText').value = '';
    }

    render() {
        return (
            <>
            <Container>
                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <div className='p-4 bg-dark d-flex justify-content-around'>
                            <input type='text' id='taskText' className='p-1 w-75 rounded border-0' placeholder='Todo something...' />
                            {
                                this.state.isEdit === false ?
                                <Button onClick={()=> this.AddTodo()} color='info text-white'><i className='fa fa-plus'></i> Add todo</Button>:
                                <Button onClick={()=> this.AddTodo()} color='info text-white'><i className='fa fa-edit'></i> Edit todo</Button>
                            }
                            {
                                this.state.isEdit === true ?
                                <Button onClick={()=> this.CancelEdit()} color='danger'><i className='fa fa-backspace'></i></Button>:
                                ''
                            }
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <ListGroup>
                            {
                                this.state.todos.map((todo, index)=> {
                                    return(
                                        <ListGroupItem className='list_item' key={index}> <span onClick={()=> this.EditTodo(index, todo)}>{ todo.text }</span> <Button color='danger' onClick={()=>this.DelTodo(index)}><i className='fa fa-trash'></i></Button></ListGroupItem>
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
}
