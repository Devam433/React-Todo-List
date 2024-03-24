import { React } from "react";
import { Button } from "./Button"
import "./todoInput.css"

export function Todoinput(props){
    
    return (
    <form onSubmit={props.handleOnsubmit} className="todo-input-container-form">
        <input 
        name="todo"
        value={props.formData}
        onChange={props.handleOnchange} 
        type="text" id="todo-input" 
        placeholder="Enter todo"
        />
        <Button value="ADD" />
    </form>
    )
}