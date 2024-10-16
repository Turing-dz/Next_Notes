import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({text,setText}) {
  // const [text, setText] = useState("");
  // const [show ,setShow]=useState(false)
  const [warningText,setWarningText]=useState("")
  const handleChange = (e) => {
    let newText = e.target.value;
    // setShow(false)
    
    if (newText.includes("<script>")) {
      // alert("");
      setWarningText("No script tag allowed!")
      newText = newText.replace("<script>", "");
      // setShow(true)
    }else if(newText.includes("@")){
      setWarningText("No @ symbol allowed!")
      newText = newText.replace("@", "");
      // setShow(true)
    }else{
      setWarningText("")
    }
    setText(newText);
  };
  return (
    <div className="textarea">
    <textarea
      onChange={handleChange}
      value={text}
      placeholder="Enter your text"
      spellCheck="false"
      
    />
    <Warning warningText={warningText}/>
    </div>
  );
}
