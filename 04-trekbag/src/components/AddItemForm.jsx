import React, { useContext, useRef, useState } from "react";
import Button from "./Button";
// import { listContext } from "../contexts/ListContextProvider";
import { useListStore } from "../stores/listStore";

export default function AddItemForm() {
  // const {handleAddList: onAddList}=useContext(listContext)
  const onAddList=useListStore(state=>(state.handleAddList))
  const [textInput, setInput] = useState("");
  const inputRef=useRef()
  const handleSubmit=(e) => {
    e.preventDefault();
    //basic validation
    if (!textInput){
      alert("Item can't be empty!")
      // document.querySelector("input").focus()
      inputRef.current.focus()
      return;
    }
    onAddList(textInput)
    setInput("")
  }
  return (
    <form
      onSubmit={handleSubmit}
    >
      <h2>Add an item</h2>
      <input ref={inputRef} value={textInput} onChange={(e) => setInput(e.target.value)} autoFocus={true}/>
      <Button>Add to list</Button>
    </form> 
  );
}
