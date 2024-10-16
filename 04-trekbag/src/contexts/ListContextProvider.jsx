import React, { createContext,useState,useEffect } from 'react'
import { initialItems } from "../lib/constants";
export const listContext=createContext()
export default function ListContextProvider({children}) {
     //从浏览器本地获取list
  // const listFromLocalStorage=JSON.parse(localStorage.getItem("mylist"))
  // const [textList,setTextList]=useState(listFromLocalStorage||initialItems)
  const [textList,setTextList]=useState(()=>{return JSON.parse(localStorage.getItem("mylist"))||initialItems})
  const handleAddList=(textInputItem)=>{
    const newItem={id:new Date().getTime(),name:textInputItem,packed:false}
    setTextList((prev)=>{return [...prev,newItem]})
  }
  const handleRemoveAll=()=>{
    setTextList([])
  }
  const handleReset=()=>{
    setTextList(initialItems)
  } 
  const handleComplete=()=>{
    const newList=textList.map((item)=>{return {...item,packed:true}})
    setTextList(newList)
  }
  const handleIncomplete=()=>{
    const newList=textList.map(item=>{return {...item,packed:false}})
    setTextList(newList)
  }
  const handleDelete=(id)=>{
    const newList=textList.filter((item)=>{return item.id!==id})
    setTextList(newList)
  }
  const handleTaggle=(id)=>{
    const newList=textList.map((item)=>{
      if(item.id===id){
        return {...item,packed:!item.packed}
      }
      return item
    })
    setTextList(newList)
  }
  //list保存到浏览器本地
  useEffect(()=>{
    localStorage.setItem("mylist",JSON.stringify(textList))
  },[textList])
  return (
    <listContext.Provider value={{textList,handleAddList,handleRemoveAll,handleReset,handleComplete,handleIncomplete,handleDelete,handleTaggle}}>
      {children}
    </listContext.Provider>
  )
}
