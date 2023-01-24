import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import { useFeedbackData } from "../context/FeedbackContext";

const FeedbackList = () => {
  const { feedbacks, reverse } = useFeedbackData();

  if (!feedbacks || feedbacks.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
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
  );

  // return (
  //   <div className="feedback-list">
  //     {feedbacks.map((item) => (
  //       <FeedbackItem
  //         key={item.id}
  //         item={item}
  //         reverse={reverse}
  //         handleDelete={handleDelete}
  //       />
  //     ))}
  //   </div>
  // );
};

export default FeedbackList;
