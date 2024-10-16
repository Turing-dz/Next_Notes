import FeedbackItem from "./FeedbackItem";

import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsContext } from "../../lib/hooks";
import { useFeedbackItemStore } from "../../stores/feedbackItemsStore";

// type TContainerProps={
//   isLoading:boolean,
//   errorMessage:string,
//   feedbackItems:TFeedbackItem[],
// }
export default function FeedbackList() {
  // const {isLoading,errorMessage,filteredFeedbackItems}=useFeedbackItemsContext()
   const [isLoading,errorMessage,filteredFeedbackItems]=useFeedbackItemStore(state=>([state.isLoading,state.errorMessage,state.filteredFeedbackItems()]))
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {!isLoading&& !errorMessage&&filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
