import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedbacks, reverse, handleDelete }) => {
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
            <FeedbackItem
              key={item.id}
              item={item}
              reverse={reverse}
              handleDelete={handleDelete}
            />
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
