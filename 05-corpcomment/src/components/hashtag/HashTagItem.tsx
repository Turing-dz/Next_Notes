import { useFeedbackItemsContext } from "../../lib/hooks"
import { useFeedbackItemStore } from "../../stores/feedbackItemsStore"


export default function HashTagItem({company}:{company:string}) {
    // const {handleSelectCompany}=useFeedbackItemsContext()
    const handleSelectCompany=useFeedbackItemStore(state=>state.handleSelectCompany)
  return (
    <li key={company}>
            <button onClick={()=>{handleSelectCompany(company)}}>#{company}</button>
          </li>
  )
}
