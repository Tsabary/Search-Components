import React, { useContext } from "react";
import WithResults from './withResults';

import SingleResult from "../singleResult/Secondary";
import { SecondarySearchTermContext } from "../../providers/SecondarySearchTermProvider";

const SecondaryResults = props => {
  const { currentSearchTerm } = useContext(SecondarySearchTermContext);

  const compare = (a, b) => {
    if (a.term.length < b.term.length) return 1;
    if (b.term.length < a.term.length) return -1;

    return 0;
  };

  const renderResults = () => {
    //According to screens, this search starts showing results after the first character
    if (props.results[0] === undefined || currentSearchTerm.length === 0)
      return null;

    const relevantResults = [];
    props.results[0]
      .sort(compare)
      .reverse()
      .map(result => {
        if (
          result.term.toLowerCase().startsWith(currentSearchTerm.toLowerCase()) //According to screens, this search only shows results that start with the searched term
        ) {
          relevantResults.push(result);
        }
      });

    return relevantResults.map(result => {
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

export default WithResults(SecondaryResults);