import { TFeedbackItem } from "../../lib/type";
import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";
// type TContainerProps={
//   isLoading:boolean,
//   errorMessage:string,
//   feedbackItems:TFeedbackItem[],
//   handleAddToList:(text:string)=>void,
// }
export default function Container() {
  return (
    <main className="container">
      <Header />
      <FeedbackList />
    </main>
  )
} 