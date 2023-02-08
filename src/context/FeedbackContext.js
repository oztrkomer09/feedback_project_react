import { createContext, useContext, useState, useEffect } from "react";
import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [reverse, setReverse] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    id: 0,
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch Feedbacks

  const fetchFeedback = async () => {
    const response = await fetch(
      "http://localhost:5000/feedback?_sort=id&order=desc"
    );

    const data = await response.json();

    setFeedbacks(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  // Delete Feedback
  const deleteFeedback = (id) => {
    setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
  };

  //Add Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  //Update Feedback
  const updateFeedback = (id, newFeedback) => {
    setFeedbacks([
      newFeedback,
      ...feedbacks.filter((item) => {
        return item.id !== id;
      }),
    ]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      id: item.id,
      item,
      edit: true,
    });
  };

  const data = {
    reverse,
    setReverse,
    feedbacks,
    setFeedbacks,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEdit,
    updateFeedback,
    isLoading,
  };
  return (
    <FeedbackContext.Provider value={data}>{children}</FeedbackContext.Provider>
  );
};

export const useFeedbackData = () => useContext(FeedbackContext);
