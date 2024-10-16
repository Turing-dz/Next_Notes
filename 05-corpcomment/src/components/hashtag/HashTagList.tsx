
import { useFeedbackItemsContext } from "../../lib/hooks";
import { useFeedbackItemStore } from "../../stores/feedbackItemsStore";
import HashTagItem from "./HashTagItem";


export default function HashTagList() {
  // const {companyList}=useFeedbackItemsContext()
  const companyList=useFeedbackItemStore(state=>state.companyList())
  return (
    <ul className="hashtags">
      {companyList.map((company: string) => {
        return (
          <HashTagItem company={company} key={company}/>
        );
      })}
    </ul>
  );
}
