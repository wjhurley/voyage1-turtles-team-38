import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*Elements not defined as
        as own component have ComponentName-sub-element naming convention*/}
        <div className="App-widget-row">
          <div className="App-widget-cluster">
            {/*Elements expected to be defined as own
            component use ComponentName convention*/}
            <div className="Widget">Links</div>
            <div className="Widget">Zen</div>
          </div>
          <div className="App-widget-cluster">
            <div className="Widget">Weather</div>
          </div>
        </div>
        <div className="Widget Clock">
          6:30
        </div>
        <div className="App-widget-row">
          <div className="App-widget-cluster">
            <div className="Widget">Settings</div>
            <div className="Widget">Calendar</div>
          </div>
          <div className="App-widget-cluster">
            <div className="Widget">Note Taker</div>
            <div className="Widget">To-Do</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
