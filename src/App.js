import React, { Component } from "react";
import { fetchData } from "./api";
import { CountryProvider } from "./Components/CountryContext";
import { Header, Statistics, CountryPicker, Charts } from "./Components";

import "./styles/styles.scss";

export default class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState(() => ({ data: fetchedData }));
  }

  render() {
    return (
      <div>
        <CountryProvider>
          <Header />
          <div className="main-wrapper">
            <Statistics data={this.state.data} />
            <Charts stats={this.state.data} />
            <CountryPicker data={this.state.countriesData} />
          </div>
        </CountryProvider>
      </div>
    );
  }
}
