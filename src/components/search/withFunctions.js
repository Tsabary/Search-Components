import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchResults } from "../../actions";

const withFunctions = (WrappedComponent, minChars, Context) => {
  return props => {
    const { currentSearchTerm, setCurrentSearchTerm, tempSearchTerm, setTempSearchTerm } = useContext(Context);

    useEffect(() => {
      if (currentSearchTerm.length > minChars) {
        props.fetchResults(currentSearchTerm);
      }
    }, [currentSearchTerm]);

    return (
      <WrappedComponent
        currentSearchTerm={currentSearchTerm}
        setCurrentSearchTerm={setCurrentSearchTerm}
        tempSearchTerm={tempSearchTerm}
        setTempSearchTerm={setTempSearchTerm}
        {...props}
      />
    );
  };
};

const composedWithFunctions = compose(
  connect(null, { fetchResults }),
  withFunctions
);

export default composedWithFunctions;
