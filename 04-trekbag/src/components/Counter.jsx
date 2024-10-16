//1.drill
// import React from 'react'
// export default function Counter({packedNumber,listNumber}) {
//   return (
//     <p><b>{packedNumber}</b> /{listNumber} items packed</p>
//   )
// }
//2.context
import React, { useContext } from 'react'
import { listContext } from '../contexts/ListContextProvider'
import { useListStore } from '../stores/listStore'

export default function Counter() {
  // const {textList}=useContext(listContext)
  const textList=useListStore((state)=>state.textList)
  return (
    <p><b>{textList.filter(item=>item.packed).length}</b> /{textList.length} items packed</p>
  )
}
 