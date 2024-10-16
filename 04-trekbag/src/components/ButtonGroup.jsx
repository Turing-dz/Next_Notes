// import { ButtonGroupTextList } from "../lib/constants";
import { useContext } from "react";
import Button from "./Button";
import { listContext } from "../contexts/ListContextProvider";
import { useListStore } from "../stores/listStore";
export default function ButtonGroup() {
  // const { handleRemoveAll ,handleReset,handleComplete,handleIncomplete}=useContext(listContext)
  const [handleRemoveAll ,handleReset,handleComplete,handleIncomplete]=useListStore(state=>[ state.handleRemoveAll ,state.handleReset,state.handleComplete,state.handleIncomplete])
  const ButtonGroupTextList = [
    { id: 1, content: "Mark all as complete",onclick:handleComplete },
    { id: 2, content: "Mark all as incomplete",onclick:handleIncomplete },
    { id: 3, content: "Reset to initial",onclick: handleReset},
    { id: 4, content: "Remove all items",onclick: handleRemoveAll},
  ];
  return (
    <section className="button-group">
      {ButtonGroupTextList.map((text) => {
        // const handleActions = () => {
        //   if (text.id === 4) {
        //     return handleRemoveAll;
        //   }else if(text.id===3){
        //     return handleReset;
        //   }else if(text.id===1){
        //     return handleComplete;
        //   }else if(text.id===2){
        //     return handleIncomplete;
        //   }
        //   return;
        // };
        return (
          <Button
            key={text.content}
            type="secondary"
            actionType={text.onclick}//这里函数必须执行而不是引用，所以必须有（）
          >
            {text.content}
          </Button>
        );
      })}
    </section>
  );
}
