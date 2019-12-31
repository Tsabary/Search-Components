import "./styles.scss";
import React, { useContext } from "react";
import { SecondarySearchTermContext } from "../../providers/SecondarySearchTermProvider";

const Result = ({ searchTerm, term }) => {
  const { setCurrentSearchTerm, setTempSearchTerm } = useContext(SecondarySearchTermContext);
  
  var remainingString = term.slice(searchTerm.length)

  const handleClick = () => {
    setCurrentSearchTerm(term);
    setTempSearchTerm(term);
  }

  return (
    <div className="single-result">
      <svg
        className="single-result__choose"
        onMouseDown={handleClick}
      >
        <use xlinkHref="./sprite.svg#icon-arrow-bold-up"></use>
      </svg>
      <div className="single-result__term">{searchTerm}</div>
      <div className="single-result__non-term">{remainingString}</div>
    </div>
  );
};

export default Result;
