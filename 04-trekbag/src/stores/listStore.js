import {create} from 'zustand'
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/constants";
export const useListStore=create(
    persist(
        (set)=>({
            textList:initialItems,
            handleAddList:(textInputItem)=>{
                const newItem={id:new Date().getTime(),name:textInputItem,packed:false}
                set((state)=>{
                    return {textList:[...state.textList,newItem]}
                })
               
                
              },
            handleRemoveAll:()=>{return set(()=>{return {textList:[]}})},
            handleReset:()=>set(()=>({textList:initialItems})),
            handleComplete:()=>{
                set((state)=>{
                    const newList=state.textList.map((item)=>{return {...item,packed:true}})
                    return {textList:newList}
                })
            },
            handleIncomplete:()=>{
                set((state)=>{
                    const newList=state.textList.map(item=>{return {...item,packed:false}})
                    return {textList:newList}
                })
            },
            handleDelete:(id)=>{
                set((state)=>{
                    const newList=state.textList.filter((item)=>{return item.id!==id})
                    return {textList:newList}
                })
            },
            handleTaggle:(id)=>{
                  set((state)=>{
                    const newList=state.textList.map((item)=>{
                        if(item.id===id){
                          return {...item,packed:!item.packed}
                        }
                        return item
                      })
                    return {textList:newList}})
            }
        }),{name:"mylocalstorage"}
    )
)