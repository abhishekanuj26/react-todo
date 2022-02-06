import React from "react";

const TodoLists=(props)=>{
   
    return (
    <>
        <div className="todo_list">
        <li>{props.text}    </li>
        <button onClick={()=>{
            props.onSelect(props.id);
        }}> done</button>
        </div>
    </>
    )
};
export default TodoLists;