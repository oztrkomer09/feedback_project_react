import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import { useFeedbackData } from "../context/FeedbackContext";
import logo from "./assets/spinner.gif";

const FeedbackList = () => {
  const { feedbacks, reverse, isLoading } = useFeedbackData();

  if (!feedbacks || feedbacks.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div>
      {isLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 60 }}
        >
          <img style={{ width: 100, height: 100 }} src={logo} alt="" />
        </div>
      ) : (
        <div className="feedback-list">
          <AnimatePresence>
            {feedbacks.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FeedbackItem key={item.id} item={item} reverse={reverse} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default FeedbackList;
