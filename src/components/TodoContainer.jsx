import { Todoinput } from "./Totoinput.jsx";
import { List } from "./List.jsx";
import { useEffect, useState } from "react";
import "./todoContainer.css";
import { todoCollections } from "../Firebase.js"; 
import { onSnapshot, doc, updateDoc, addDoc } from "firebase/firestore";

export function TodoContainer(){
  console.log('Todo conatiner Rerendered');
  const [formData,setFormData] = useState("");
  const [todoItems,setTodoItems] = useState([]);

  function handleOnchange(e) {
    const { value } = e.target;
    setFormData(value);
  }
//updateField
 async function updateDbTodo() {
  try{
    const todoDocRef = doc(todoCollections, 'bzmRs7r181wUU0ekIeMe'); 
    await updateDoc(todoDocRef,{
      todoItem: formData,
      isCompleted: false
    })
      console.log("Document updated successfully!");
      // Optionally, update state or perform any other actions
  } catch(error){
    console.log('Error updateing todoField',error)
  }
  }

  //add document
async function addDbTodo(formData) {
    try {
      // Add a new document to the 'Todos' collection with the new field
      await addDoc(todoCollections, {
        todoItem:formData,
        isCompleted: false
      });
      
      console.log("New document added successfully!");
      // Optionally, update state or perform any other actions
    } catch (error) {
      console.error("Error adding document: ", error);
    }
};

  function handleOnsubmit(e,isEmpty) {
    e.preventDefault();
    if(!isEmpty) {

      addDbTodo(formData)

      // setTodoItems((prev)=>{
      //   return [...prev,{todoItem: formData, isCompleted: false}]
      // })
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
    updateDbTodo()
    // setTodoItems(prev=>{
    //   return prev.map(item=>{
    //     if(item.id === id) {
    //       return {...item, todoItem: formData}
    //     }
    //     return item;
    //   })
    // })
    setFormData("");
  }

  useEffect(()=>{
      const unsubscribe = onSnapshot(todoCollections, function(snapshot){
        console.log(JSON.stringify(snapshot.docs.map(doc=>doc.data)))
        const newTodoItemsArr = snapshot.docs.map((doc)=>{
          console.log(`...${JSON.stringify(doc)}`)
            return {
              ...doc.data(),
              id: doc.id
            }
        })
        // console.log(newTodoItemsArr)
        setTodoItems(newTodoItemsArr)
        // console.log(todoItems)
      })
      return unsubscribe;
    },[])

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