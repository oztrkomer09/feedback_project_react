const FeedbackStats = ({ feedbacks }) => {
  var a = 0;
  const total = feedbacks.map((item) => {
    a += item.rating;
    return a;
  });
  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>
        Average Rating:{isNaN(a / feedbacks.length) ? 0 : a / feedbacks.length}
      </h4>
    </div>
  );
};

export default FeedbackStats;
