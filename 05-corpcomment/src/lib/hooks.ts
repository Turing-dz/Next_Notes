import { useContext, useEffect, useState } from "react"
import { FeedbackItemsContext } from "../contexts/FeedbackItemsContextProvider"
import { TFeedbackItem } from "./type"

export function useFeedbackItemsContext(){
    const context=useContext(FeedbackItemsContext)
    if(!context){
      throw new Error("feedbackItemsContext is null")
    }
    return context
  }
export function useFeedbackItems(){
    const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const fetchFeedbackItems = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
          );
          if (!response.ok) {
            throw new Error();
          }
          const data = await response.json();
          setFeedbackItems(data.feedbacks);
        } catch (error) {
          setErrorMessage("Something went wrong.");
        }
        setIsLoading(false);
      };
    useEffect(() => {
        // setIsLoading(true);
        // fetch(
        //   "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        // )
        //   .then((response) => {
        //     if(!response.ok){
        //       throw new Error("Something went wrong.")//throw的异常会被外面的catch捕获
        //     }
        //     return response.json();
        //   })
        //   .then((data) => {
        //     setFeedbackItems(data.feedbacks);
        //     setIsLoading(false);
        //   })
        //   .catch(()=>{//promis有两个方法.then和.catch（promis异常，得不到正确的response元数据流）
        //     setErrorMessage("Something went wrong.")
        //     setIsLoading(false)
        //   });
    
        fetchFeedbackItems();
      }, []);
      return {feedbackItems,isLoading,errorMessage,setFeedbackItems}
  }