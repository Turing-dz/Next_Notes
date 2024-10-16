import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashTagList from "./hashtag/HashTagList";

import FeedbackItemsContextProvider from "../contexts/FeedbackItemsContextProvider";
import { useFeedbackItemStore } from "../stores/feedbackItemsStore";
import { useEffect } from "react";
function App() {
  
  const fetchFeedbackItems=useFeedbackItemStore(state=>state.fetchFeedbackItems)
  useEffect(()=>{
    fetchFeedbackItems()
  },[fetchFeedbackItems])

 
  return (
    <div className="app">
      <Footer />
      {/* <FeedbackItemsContextProvider>
      <Container />
      <HashTagList  />
      </FeedbackItemsContextProvider> */}
      <Container />
      <HashTagList  />
      
    </div>
  );
}

export default App;
