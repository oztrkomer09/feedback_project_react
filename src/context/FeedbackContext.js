import { createContext, useContext, useState, useEffect } from "react";

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
    const response = await fetch("/feedback?_sort=id&order=desc");

    const data = await response.json();
    setFeedbacks(data);
    if (data) {
      setIsLoading(false);
    }
  };

  // Delete Feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });

      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  //Add Feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    setFeedbacks([data, ...feedbacks]);
  };

  //Update Feedback
  const updateFeedback = async (id, newFeedback) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedbacks(feedbacks.map((item) => (item.id === id ? data : item)));

    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
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
