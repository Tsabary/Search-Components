import React, { useContext } from "react";
import WithResults from "./withResults";
import SingleResult from "../singleResult/Primary";
import { PrimarySearchTermContext } from "../../providers/PrimarySearchTermProvider";

const PrimaryResults = props => {
  const { currentSearchTerm } = useContext(PrimarySearchTermContext);

  const compare = (a, b) => {
    if (a.resultCount > b.resultCount) return 1;
    if (b.resultCount > a.resultCount) return -1;

    return 0;
  };

  const renderResults = () => {
    //According to requirements, this search starts showing results after the third character
    if (props.results[0] === undefined || currentSearchTerm.length <= 2)
      return null;

    const relevantResults = [];
    props.results[0]
      .sort(compare)
      .reverse()
      .map(result => {
        if (result.term.toLowerCase().includes(currentSearchTerm.toLowerCase()))
          relevantResults.push(result);
      });

    return relevantResults.slice(0, 4).map(result => {
      if (currentSearchTerm === result.term) return null;
      return (
        <SingleResult
          searchTerm={currentSearchTerm}
          term={result.term}
          resultCount={result.resultCount}
          key={result.term}
        />
      );
    });
  };

  return <div className="results">{renderResults()}</div>;
};

export default WithResults(PrimaryResults);
