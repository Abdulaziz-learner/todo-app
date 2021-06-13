import React,{useState,useRef} from 'react';
import {Container,Row,Col,Button,ListGroup,ListGroupItem} from 'reactstrap'
function Edit (){
const [todos,setTodos] = useState([{text:'O\'qish'},{text:'Turish'},{text:'Yozish'},{text:'Yurish'}] );
 const todoRef=useRef();
 const [isEdit, setIsEdit] = useState(false);
 const [editTodoId, setEditTodoId] = useState(0);
const [userAbs,setUserAbs]=useState([{}]);
   
    

const ADD=()=>{
    if(isEdit===false){
        let arr=[];
        todos.map((todo)=>{
            arr.push(todo);
            return true;
        })
        arr.push({text:todoRef.current.value});
        setTodos(arr);
        todoRef.current.value='';
    }
     else
      {
todos.map((todo,index)=>{
    if(index===editTodoId){
        if(todo.text==todoRef.current.value){
            alert('o\'zgartiring');
          
    } else {
        let sarrTodos=[];
        todos.map((todo)=>{
            sarrTodos.push(todo);
            return true
        });
        sarrTodos.map((todo,index)=>{
            index===editTodoId ? todo.text=todoRef.current.value
            :console.log();
                return true
            })
    
       
setTodos(sarrTodos);
todoRef.current.value='';
}
}
});
}

}
const DEL=(id)=>{
    let del=[];
    todos.map((todo,index)=>{
index !== id ? del.push(todo):console.log();
return true
    })
    setTodos(del)
}

const EditTodo = (id,obj) => {
    

    todoRef.current.value = obj.text;
    setIsEdit(true);
    setEditTodoId(id);
}
const CancelEdit = () => {
    setIsEdit(false);
 todoRef.current.value='';
 }


 return(
     <>
    <Container>
        <Row>
            <Col md={{size:8,offset:2}}>
               <div className='py-4 d-flex justify-content-between'> 
               <input ref={todoRef} type='text' className='w-50' placeholder='Todo something' />
             
        {isEdit===false ? 
        <Button onClick={()=>ADD()} className='btn btn-info w-20'><i className='fa fa-plus'>AddTodo</i></Button>:
         <Button onClick={()=>ADD()} className='btn btn-info w-20'><i className='fa fa-edit'>Edit todo</i></Button> }

{
        isEdit === true ?
                                <Button className='w-10' onClick={()=> CancelEdit()} color='danger'><i className='fa fa-backspace'></i></Button>:
                                ''
                            }

               </div>
            </Col>
        </Row>
        <Row>
            <Col md={{size:8,offset:2}}>
<ListGroup>
    {todos.map((todo,index)=>{
return(
   
<ListGroupItem  key={index}>
<span onClick={()=> EditTodo(index,todo)} className='d-flex justify-content-between' >{todo.text} <Button onClick={()=>DEL(index)} className='btn btn-danger'><i className='fa fa-trash'></i> delete</Button></span>

</ListGroupItem>

)

    })}
</ListGroup>

            </Col>
        </Row>
    </Container>
     </>
 )
} 
export default Edit;