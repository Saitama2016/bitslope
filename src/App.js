import React, { Component } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import './App.css';

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () => 
    email && 
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

    return (
      <div className="Form">
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <input 
          ref={node => (email = node)}
          type="email"
          placeholder="Email"
        />
        <br />
        <button onClick={submit}>
          Sign up
        </button>
      </div>
    )
}

class App extends Component {
  render() {
    const url =
      ""
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body>
          <main>
          <img src="https://uc.uxpin.com/files/955849/941430/FinalBitslopes_Logo_Draft_Nuggets_with_words-2-9861a1.png"></img>
            <h2 className="desc">Legal software for peak performance</h2>
              <MailchimpSubscribe 
                url={url}
                render={({ subscribe, status, message }) => (
                  <CustomForm 
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                  />
                )}
              />
          </main>
        </body>
        <footer>
          <h2>Design Credit:</h2>
        </footer>
      </div>
    );
  }
}

export default App;
