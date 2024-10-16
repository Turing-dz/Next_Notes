import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/type";
import { useState } from "react";
type FeedbackItemProps = { feedbackItem: TFeedbackItem };
export default function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  const [open,setOpen]=useState(false)
  const [count,setCount]=useState(feedbackItem.upvoteCount)
  const handleUpVote=(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    setCount(prev=>++prev)
    e.currentTarget.disabled=true
    e.stopPropagation();
  }
  return (
    <div>
      <li onClick={()=>{setOpen((prev)=>{return !prev})}} className={`feedback ${open?"feedback--expand":""}`}>
        <button onClick={handleUpVote}>
          {/* <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path></svg> */}
          <TriangleUpIcon />
          <span>{count}</span>
        </button>
        <div>
          <p>{feedbackItem.badgeLetter}</p>
        </div>
        <div>
          <p>{feedbackItem.company}</p>
          <p>{feedbackItem.text}</p>
        </div>
        <p>{feedbackItem.daysAgo===0?'NEW':`${feedbackItem.daysAgo}d`}</p>
      </li>
    </div>
  );
}
