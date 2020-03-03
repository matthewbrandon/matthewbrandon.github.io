import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComp from './components/MyComponent';

class App extends Component {
  constructor() {
    super();
    this.counter = 21;
    this.state = {
      myState: "TBD"
    };
  }
  onPushMe = () => {
    console.log("You pushed me");
    this.counter++;
    this.setState({
      myState: "now:" + this.counter
    });
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>I am in control of this application and my name is Matthew Brandon {this.counter} {this.state.myState}</h1>
          <button onClick={this.onPushMe}>
              Push Me
            </button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* <MyComp/> */}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>I am in control of this application and my name is Matthew Brandon {counter} {state.myState} </h1>
//         <button onClick={onPushMe}>
//             Push Me
//           </button>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
