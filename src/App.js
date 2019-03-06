import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body>
          <main>
          <img src="https://uc.uxpin.com/files/955849/941430/FinalBitslopes_Logo_Draft_Nuggets_with_words-2-9861a1.png"></img>
            <h2>Legal software for peak performance</h2>
            <section className="mailChimpBox">
              <form>
                <input type="text" placeholder="Email"></input>
              </form>
              <br />
              <button type="submit">Sign Up</button>
            </section>
          </main>
        </body>
      </div>
    );
  }
}

export default App;
