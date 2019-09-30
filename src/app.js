import React, { Component } from "react";
import Header from "./header";
import Content from "./content";

class App extends Component {
  //state = {  }
  render() {
    return (
      <div className="notificationsPaanel">
            <div clasName="panel">
                <Header title="Timeline" />
                <Header title="Profile" />
                <Header title="Settings" />
                <Header title="Chat" />
                <Content/>
                
            </div>
        </div>
    );
  }
}

export default App;
