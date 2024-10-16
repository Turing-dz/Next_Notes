import {  useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";
import { useFeedbackItemsContext } from "../../lib/hooks";
import { useFeedbackItemStore } from "../../stores/feedbackItemsStore";

export default function FeedbackForm() {
  // const {handleAddToList}=useFeedbackItemsContext()
  const handleAddToList=useFeedbackItemStore(state=>state.handleAddToList)
  const [text, setText] = useState("");
  const charCount = MAX_CHARACTERS - text.length;
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(newText);
  };
  const [showValidIndicator,setShowValidIndicator]=useState(false)
  const [showInvalidIndicator,setShoeInvalidIndicator]=useState(false)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //validation
    if(text.includes("#")&&text.length>=5){
      setShowValidIndicator(true)
      setTimeout(()=>{return setShowValidIndicator(false)},2000)
    }else{
      setShoeInvalidIndicator(true)
      setTimeout(()=>setShoeInvalidIndicator(false),2000)
      return
    }
    handleAddToList(text);
    setText('');
  };
  return (
    <form className={`form ${showValidIndicator?"form--valid":""} ${showInvalidIndicator? "form--invalid":""}`} onSubmit={handleSubmit}>
      <textarea
        id="feedback-textarea"
        placeholder="blabla"
        spellCheck={false}
        onChange={handleChange}
        value={text} // 绑定状态
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here,remember to #hashtag the compony
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
