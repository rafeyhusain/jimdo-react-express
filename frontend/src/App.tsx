import React, { Component } from "react";

import styles from "./App.module.scss";
import PlaceSearch from "./components/PlaceSearch/PlaceSearch";

class App extends Component {
  public render() {
    return <div className={styles.root}><PlaceSearch/></div>;
  }
}

export default App;
