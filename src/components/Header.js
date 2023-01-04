import PropTypes from "prop-types";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

const Header = ({ bgColor, textColor, padding, setReverse, reverse }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    padding: padding,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>Feedback UI</h2>
      </div>
      <div
        style={{
          cursor: "pointer",
          fontSize: "1.5rem",
          userSelect: "none",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => {
          setReverse(!reverse);
        }}
      >
        {reverse ? <BsSun /> : <BsMoonStarsFill />}
      </div>
    </header>
  );
};

Header.defaultProps = {
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
  padding: "1rem",
};

Header.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  padding: PropTypes.string,
};

export default Header;