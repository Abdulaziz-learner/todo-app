import { useRef, useState } from "react";
import {Container,Row,Col,Button,ListGroup,ListGroupItem} from 'reactstrap';
function Refli (){
const [todos,setTodos]=useState([{title:'Ertalab turish'},{title:'Yugurish'}]);
const todoRef=useRef();
const [isEdit, setIsEdit] = useState(false);
const [editTodoId, setEditTodoId] = useState(0);
const AddTodo= ()=>{
    if(isEdit===false)
    {
        let arr=[];
        todos.map((todo)=>{
        arr.push(todo);
        return true
        })
        arr.push({title:todoRef.current.value});
        setTodos(arr)
        
        todoRef.current.value=''}
        else{
            todos.map((todo,index)=>{
                if(index===editTodoId){
                    if(todo.title=todoRef.current.value){alert('yozin')}
                } else {
                    let arrTodos=[];
                    todos.map((todo,index)=>{
                    arrTodos.push(todo );
                    return true   
                    })
                    arrTodos.map((todo,index)=>{
                      if(index===editTodoId){
                        todo.title=todoRef.current.value  
                      }  
                      return true
                    })
                    setTodos(arrTodos);
                    todoRef.current.value='';
                }
            })
        }

}

const DelTodo =(id)=>{
let arrDel =[];
todos.map((todo,index)=>{index !== id ? arrDel.push(todo):console.log();
    return true})
    setTodos(arrDel);

}
const EditTodo = (id, obj) => {
    todoRef.current.value = obj.title;
    setIsEdit(true);
    setEditTodoId(id);
}

const CancelEdit = () => {
   setIsEdit(false);
    todoRef.current.value = '';
}

    return(
<Container>
    <Row>
        <Col md={{size:8,offset:2}}>
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
        <Col md={{size:8,offset:2}}>
        <ListGroup>


    
{
todos.map((todo,index)=>{
return(

    <ListGroupItem  key={index}> <span onClick={()=> EditTodo(index, todo)}>{ todo.text }</span> <Button color='danger' onClick={()=>DelTodo(index)}><i className='fa fa-trash'></i></Button></ListGroupItem>

)


})}

</ListGroup>
        </Col>
    </Row>
</Container>


    )
} 
export default Refli;