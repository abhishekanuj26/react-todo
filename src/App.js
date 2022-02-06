import { useState } from "react/cjs/react.development";
import TodoLists from "./TodoLists";
function App() {
  const [inputList,setInputList]=useState("");
  const [items,setItems]=useState([]);

  const ItemEvent=(event)=>{
    setInputList(event.target.value);
  };
  const AddItems=()=>{
    setItems((olditems)=>{
      return [...olditems,inputList];
    })
    setInputList("");
  };
  const deleteItems=(id)=>{
    console.log("deleted");
   setItems(olditems=>{
     return olditems.filter((currElement,index)=>{
       return id!==index;
     })
   })
};
  return (
    <div className="main_div">
    <div className="center_div">
      <h1>Todo-List</h1>
      <input type="text" placeholder="add a item" value={inputList} onChange={ItemEvent}/>
      <button onClick={AddItems}>add</button>
      <ul>
       {items.map((val,index)=>{
          return <TodoLists key={index} id ={index} onSelect={deleteItems} text={val}/>
        })}
      </ul>
    </div>
    </div>
  );
}

export default App;
