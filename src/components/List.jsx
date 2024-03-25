import React from "react";
import { Button } from "./Button.jsx";
import "./list.css";

export function List(prop){
    console.log(prop.style)
    return (
        <div className="todo-item">
            <input 
                type="checkbox"
                className="isCompleted"
                checked={prop.isCompleted} 
                onChange={(e)=>{prop.toggleIsChecked(prop.id,e.target.checked)}}
            />
            {
                prop.isCompleted 
                ? 
                <p style={{textDecoration:'line-through', textDecorationColor: 'red'}}>{prop.todoItem}</p> 
                : 
                <p>{prop.todoItem}</p>
            }
            <Button 
                value="Detete"
                isChecked={prop.isCompleted}
                handleOnlick={prop.handleOnlick}
                id={prop.id}
            />
        </div>
    )
}