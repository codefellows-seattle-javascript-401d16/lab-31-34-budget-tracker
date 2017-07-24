import './style/main.scss';

// npm modules
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.getApp = this.getApp.bind(this);
  }
  //hooks
  componentDidUpdate() {
    console.log(':::STATE:::', this.state);
  }
  //methods
  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }
  //render
  render() {
    return (
      <main className='app'>
        
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
