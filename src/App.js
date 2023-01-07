import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./components/pages/AboutPage";

function App() {
  const [reverse, setReverse] = useState(false);
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  return (
    <BrowserRouter>
      <Header setReverse={setReverse} reverse={reverse} />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedbacks={feedbacks} />
                <FeedbackList
                  feedbacks={feedbacks}
                  reverse={reverse}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <AboutIconLink />
    </BrowserRouter>
  );
}

export default App;
