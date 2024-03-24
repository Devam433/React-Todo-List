import React from "react";
import { Button } from "./Button.jsx";
import "./list.css";
export function List(prop){
    return (
        <div className="todo-item">
            <input 
            type="checkbox"
            className="isCompleted"
            checked={prop.isCompleted} 
            onChange={(e)=>{prop.toggleIsChecked(prop.id,e.target.checked)}}
            />
            <p>{prop.todoItem}</p>
            <Button 
            value="Detete"
            handleOnlick={prop.handleOnlick}
            id={prop.id}
            />
        </div>
    )
}