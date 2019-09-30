import React, { Component } from "react";
import Header from "./header";
//import Content from "./content";
import Welcome from "./welcome";

class App extends Component {
  //state = {  }
  render() {
    return (
      <div className="notificationsPaanel">
            <div clasName="panel">
                <Header title="Timeline" />
                
                {/*<Content/>*/}
                <Welcome/>
                
            </div>
        </div>
    );
  }
}

export default App;
