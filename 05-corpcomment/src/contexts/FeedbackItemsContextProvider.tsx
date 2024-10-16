
import { useFeedbackItems } from "../lib/hooks";
import { TFeedbackItem } from "../lib/type";
import { createContext,useMemo, useState } from "react";
type TFeedbackItemsContext={
    isLoading:boolean,
    errorMessage:string,
    companyList:string[],
    handleAddToList:(text:string)=>void,
    selectedCompany:string,
    filteredFeedbackItems:TFeedbackItem[],
    handleSelectCompany:(company:string)=>void,
}
type TFeedbackItemsContextProvider={
  children:React.ReactNode
}
export const FeedbackItemsContext=createContext<TFeedbackItemsContext|null>(null)
export default function FeedbackItemsContextProvider({children}:TFeedbackItemsContextProvider) {
  const {feedbackItems,isLoading,errorMessage,setFeedbackItems}=useFeedbackItems()
  const [selectedCompany,setSelectedCompany]=useState("")

  const companyList = useMemo(() => {
    return feedbackItems
      .map((item) => item.company)
      .filter((company, index, array) => {
        return array.indexOf(company) === index;
      });
  }, [feedbackItems]);
  const handleAddToList = async (text: string) => {
    const componyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);
    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: componyName,
      badgeLetter: componyName.substring(0, 1).toUpperCase(),
    };
    setFeedbackItems([...feedbackItems, newItem]);
    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  };
  const filteredFeedbackItems=useMemo(()=>{
    return selectedCompany?feedbackItems.filter((feedbackItem)=>{return feedbackItem.company===selectedCompany}):feedbackItems
  },[feedbackItems,selectedCompany])
  const handleSelectCompany=(company:string)=>{setSelectedCompany(company)}


  return <FeedbackItemsContext.Provider value={{
    isLoading,
    errorMessage,
    companyList,
    handleAddToList,
    selectedCompany,
    filteredFeedbackItems,
    handleSelectCompany

  }}>{children}</FeedbackItemsContext.Provider>;
}

