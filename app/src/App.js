import React, { Component } from 'react';
import { Page } from 'react-onsenui';

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import './assets/onsen-css-theme/onsen-css-components.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      index: 0
    };
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  render() {
    return (
      <Page>
      </Page>
    );
  }
}

export default App;
