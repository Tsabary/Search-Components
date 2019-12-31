import "./styles.scss";
import React from "react";
import { PrimarySearchTermContext } from "../../providers/PrimarySearchTermProvider";
import WithFunctions from "./withFunctions";

const PrimarySearch = props => {
  const handleClick = () => {
    props.setTempSearchTerm("");
    props.setCurrentSearchTerm("");
  };

  return (
    <div className="search">
      <input
        type="text"
        required
        className="search__input search__input--primary"
        placeholder="Search"
        onChange={e => props.setTempSearchTerm(e.target.value)}
        onKeyUp={() => props.setCurrentSearchTerm(props.tempSearchTerm)}
        value={props.tempSearchTerm}
      />
      <svg
        className="search__icon search__icon--clear"
        onMouseDown={handleClick}
      >
        <use xlinkHref="./sprite.svg#icon-cross"></use>
      </svg>
      <svg className="search__icon search__icon--magnifying">
        <use xlinkHref="/sprite.svg#icon-magnifying-glass"></use>
      </svg>
    </div>
  );
};

export default WithFunctions(PrimarySearch, 2, PrimarySearchTermContext);
