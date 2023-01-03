import Card from "./Card";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({ item, reverse, handleDelete }) => {
  return (
    <Card reverse={reverse}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
