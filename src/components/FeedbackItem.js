import Card from "./Card";
import { FaTimes } from "react-icons/fa";
import { useFeedbackData } from "../context/FeedbackContext";

const FeedbackItem = ({ item, reverse }) => {
  const { deleteFeedback } = useFeedbackData();
  return (
    <Card reverse={reverse}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
