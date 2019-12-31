import React, { useContext } from "react";
import "./styles.scss";
import { SecondarySearchTermContext } from "../../providers/SecondarySearchTermProvider";

const Result = ({ searchTerm, term }) => {
  const { setCurrentSearchTerm } = useContext(SecondarySearchTermContext);
  
  var remainingString = term.slice(searchTerm.length)

  return (
    <div className="single-result">
      <svg
        className="single-result__choose"
        onMouseDown={() => setCurrentSearchTerm(term)}
      >
        <use xlinkHref="./sprite.svg#icon-arrow-bold-up"></use>
      </svg>
      <div className="single-result__term">{searchTerm}</div>
      <div className="single-result__non-term">{remainingString}</div>
    </div>
  );
};

export default Result;
