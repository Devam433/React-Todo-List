import { React, useState } from "react";
import { Button } from "./Button"
import "./todoInput.css"

export function Todoinput(props){
    console.log('Todo Input Rerendered')
    
    const [isEmpty,setIsEmpty] =useState(false);
    
    function checkIsEmpty() {
        if(props.formData ===''){
            setIsEmpty(true);
        }
        else{
            setIsEmpty(false);
        }
    }
    return (
    <div className="todo-input-form-container">
        <form onSubmit={(e)=>{props.handleOnsubmit(e,isEmpty)}} className="todo-input-container-form">
            <input 
                name="todo"
                value={props.formData}
                onChange={props.handleOnchange}
                type="text" id="todo-input" 
                placeholder="Enter todo"
            />
            <Button value="ADD" checkIsEmpty={checkIsEmpty} isEmpty={isEmpty}/>
        </form>
        {isEmpty && <p className="emptyTodo-warning">Please enter a todo!</p>}
    </div>
    )
}
