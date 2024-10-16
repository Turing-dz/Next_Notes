import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import { useEffect } from "react";
import CountButtons from "./CountButtons";
export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Space") {
        setCount((prev)=>{
          const newCount=prev+1
          if(newCount>5){
            return 5
          }
          return newCount
        })
    }};
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown",handleKeydown);
    };
  }, [count]);
  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer >
      <CountButtons type='min'  setCount={setCount} locked={locked}/>
      <CountButtons type='add'  setCount={setCount} locked={locked}/>
      </ButtonContainer>
    </div>
  );
}
