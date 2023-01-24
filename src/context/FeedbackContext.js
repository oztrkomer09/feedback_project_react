import { createContext, useContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [reverse, setReverse] = useState(false);
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  const data = {
    reverse,
    setReverse,
    feedbacks,
    setFeedbacks,
    deleteFeedback,
    addFeedback,
  };
  return (
    <FeedbackContext.Provider value={data}>{children}</FeedbackContext.Provider>
  );
};

export const useFeedbackData = () => useContext(FeedbackContext);
