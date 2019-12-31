import "./styles.scss";
import React from "react";
import { SecondarySearchTermContext } from "../../providers/SecondarySearchTermProvider";
import WithFunctions from "./withFunctions";


const SecondarySearch = props => {
  return (
    <div className="search">
      <input
        type="text"
        required
        className="search__input search__input--secondary"
        placeholder="Search"
        onChange={e => props.setTempSearchTerm(e.target.value)}
        onKeyUp={() => props.setCurrentSearchTerm(props.tempSearchTerm)}
        value={props.tempSearchTerm}
      />
      <span className="search__seperator">|</span>
      <svg className="search__icon search__icon--chevron">
        <use xlinkHref="/sprite.svg#icon-chevron-down"></use>
      </svg>
    </div>
  );
};

export default WithFunctions(SecondarySearch, 0, SecondarySearchTermContext);
