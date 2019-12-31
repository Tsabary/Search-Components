import "./styles.scss";
import React from "react";
import Global from "../styles/global";


import PrimarySearch from "./search/Primary";
import PrimaryResults from "./results/Primary";
import SecondarySearch from "./search/Secondary";
import SecondaryResults from "./results/Secondary";

import { PrimarySearchTermProvider } from "../providers/PrimarySearchTermProvider";
import { SecondarySearchTermProvider } from "../providers/SecondarySearchTermProvider";

const App = () => {
  return (
    <div className="container">
      <Global />
      <PrimarySearchTermProvider>
        <PrimarySearch />
        <PrimaryResults />
      </PrimarySearchTermProvider>
      <SecondarySearchTermProvider>
        <SecondarySearch />
        <SecondaryResults />
      </SecondarySearchTermProvider>
    </div>
  );
};

export default App;
