import React, { useContext } from "react";
import "./styles.scss";
import { PrimarySearchTermContext } from "../../providers/PrimarySearchTermProvider";

const Result = ({ searchTerm, term, resultCount }) => {
  const { setCurrentSearchTerm } = useContext(PrimarySearchTermContext);
  const split = term.toLowerCase().split(searchTerm.toLowerCase());
  var last = split[split.length - 1];
  split.pop();

  const renderString = () => {
    return split.map(subString => {

      return (
        <>
          <div className="single-result__non-term">{subString}</div>
          <div className="single-result__term">{searchTerm}</div>
        </>
      );
    });
  };

  return (
    <div className="single-result" onClick={() => setCurrentSearchTerm(term)}>
      {renderString()}
      <div className="single-result__non-term">{last}</div>
      <div className="single-result__result-count">({resultCount})</div>
    </div>
  );
};

export default Result;
