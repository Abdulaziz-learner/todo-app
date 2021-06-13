import React,{useRef,useState} from 'react';
import {Container,Row,Col,Button,ListGroup,ListGroupItem} from 'reactstrap';
function Men (){
const [todos, setTodos]= useState[{title:'Erta Turish'},{title:'yugurish'}];
const todoRef=useRef();


const AddTodo=()=>{
    let arrTodos=[];
    todos.map((todo,index)=>{
arrTodos.push(todo);
return true

    }) 
    arrTodos.push({title:todoRef.current.value})
    setTodos(arrTodos)
}
const DelTodo=(obj,id)=>{
let arrDel=[];
todos.map((todo,index)=>{
    index !==id ? arrDel.push(todo):console.log();
    return true
})
setTodos(arrDel)
}
return(
<>
    <Container>
        <Row>
            <Col md={{size:8,offset:2}}>
                <input className='w-75' ref={todoRef} type='text' placeholder='todo something' />
                <Button  className='btn btn-info w-25' onClick={()=>AddTodo()}>ADD</Button>
            </Col>
        </Row>
        <Row>
            <Col md={{size:8,offset:2}}>
            <ListGroup>
    
    
        
    {
    todos.map((todo,index)=>{
    return(
    
    <ListGroupItem > <span className='d-flex justify-content-between'>{todo.title} <Button color='danger' onClick={()=>DelTodo(todo,index)}><i className='fa fa-trash'></i></Button></span></ListGroupItem>
    
    )
    
    
    })}
    
    </ListGroup>
            </Col>
        </Row>
    </Container>
    
    </>
        )
}
export default Men;