import { Todoinput } from "./Totoinput.jsx";
import { List } from "./List.jsx";
import { useState } from "react";
import "./todoContainer.css";

export function TodoContainer(){
  console.log('Todo conatiner Rerendered');
  const [formData,setFormData] = useState("");
  const [todoItems,setTodoItems] = useState([]);

  function handleOnchange(e) {
    const { value } = e.target;
    setFormData(value);
  }
  function handleOnsubmit(e,isEmpty) {
    e.preventDefault();
    if(!isEmpty) {
      setTodoItems((prev)=>{
        return [...prev,{todoItem: formData, id: crypto.randomUUID(), isCompleted: false}]
      })
      setFormData("");
    }
  }
  function handleOnlick(TodoItemid) {
    setTodoItems((prev)=>{
      return prev.filter(item=>item.id!==TodoItemid);
    })
  }
  function toggleIsChecked(TodoItemId,isCompleted) {
    setTodoItems((prev)=>{
      return prev.map((item)=>{
        if(item.id === TodoItemId) {
          return {...item, isCompleted}
        }
        return item;
      })
    })
  }
  function editTodo(id) { 
    const foundItem=todoItems.find(item=>item.id===id)
    if(foundItem) {
      setFormData(foundItem.todoItem)
    }
  }
  function saveEditedTodo(id) {
    setTodoItems(prev=>{
      return prev.map(item=>{
        if(item.id === id) {
          return {...item, todoItem: formData}
        }
        return item;
      })
    })
    setFormData("");
  }
  return(
  <div className="todo-container">
    <Todoinput
      handleOnsubmit={handleOnsubmit}
      handleOnchange={handleOnchange}
      formData={formData}
    />
    <section className="todo-list-contaier">
    {todoItems.map((item)=>{
      return <List 
        todoItem={item.todoItem} 
        key={item.id} 
        id={item.id} 
        isCompleted={item.isCompleted} 
        handleOnlick={handleOnlick} 
        toggleIsChecked={toggleIsChecked} 
        editTodo={editTodo} 
        saveEditedTodo={saveEditedTodo}/>
    })}
    </section>
  </div>
  )
}