import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedbacks, reverse, handleDelete }) => {
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedbacks.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          reverse={reverse}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
