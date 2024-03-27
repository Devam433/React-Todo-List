import React, { useState } from "react";
import { Button } from "./Button.jsx";
import "./list.css";

export function List(prop){
    console.log('List Rerendered')
    const [editOrSaveBtnValue,SeteditOrSaveBtnValue] = useState(false);
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
                value={editOrSaveBtnValue ? 'Save' : "Edit"}
                editTodo={prop.editTodo}
                saveEditedTodo={prop.saveEditedTodo}
                isEdit={true}
                isSave={editOrSaveBtnValue}
                id={prop.id}
                SeteditOrSaveBtnValue={SeteditOrSaveBtnValue}
            />
            <Button 
                value="Detete"
                isChecked={prop.isCompleted}
                handleOnlick={prop.handleOnlick}
                id={prop.id}
            />
        </div>
    )
}