import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

const withResults = WrappedComponent => {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    };
  };
};

const mapStateToProps = state => {
  return {
    results: state.results
  };
};

const composedWithResults = compose(connect(mapStateToProps, null), withResults);

export default composedWithResults;