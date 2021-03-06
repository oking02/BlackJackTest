import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import BlackJack from './components/BlackJack';

class App extends Component {

  render() {
    return (
        <Provider store={store()}>
            <BlackJack/>
        </Provider>
    );
  }
}

export default App;
