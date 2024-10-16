import { create } from "zustand";
import { TFeedbackItem } from "../lib/type";
type TuseFeedbackItemStore={
    feedbackItems: TFeedbackItem[],
    isLoading: boolean,
    errorMessage: string,
    selectedCompany: string,
    companyList:()=>string[],
    filteredFeedbackItems:()=>TFeedbackItem[],
    handleAddToList:(text: string)=>Promise<void>,
    handleSelectCompany:(company: string)=>void,
    fetchFeedbackItems:()=>Promise<void>,
}
export const useFeedbackItemStore = create<TuseFeedbackItemStore>((set, get) => ({
  feedbackItems: [],
  isLoading: false,
  errorMessage: "",
  selectedCompany: "",
  companyList: () => {
    return get()
      .feedbackItems.map((item) => item.company)
      .filter((company, index, array) => {
        return array.indexOf(company) === index;
      });
  },
  filteredFeedbackItems: () => {
    return get().selectedCompany
      ? get().feedbackItems.filter((feedbackItem) => {
          return feedbackItem.company === get().selectedCompany;
        })
      : get().feedbackItems;
  },
  handleAddToList: async (text: string) => {
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
    // setFeedbackItems([...feedbackItems, newItem]);
    set((state) => {
      return { feedbackItems: [...state.feedbackItems, newItem] };
    });
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
  },
  handleSelectCompany: (company: string) => {
    set(() => ({ selectedCompany: company }));
  },
  fetchFeedbackItems: async () => {
    // setIsLoading(true);
    set(() => ({ isLoading: true }));
    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      //   setFeedbackItems(data.feedbacks);
      set(() => {
        return { feedbackItems: data.feedbacks };
      });
    } catch (error) {
      //   setErrorMessage("Something went wrong.");
      set(() => ({
        errorMessage: "Something went wrong. Please try again later.",
      }));
    }
    set(() => ({ isLoading: false }));
  },
}));
