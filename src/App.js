import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <div>
        {/* <div classname="header">
          <h1>Phone Directory</h1>
        </div>
        <button> Add </button>
        <div>
          <span> Name </span> <br />
          <span> Phone </span>
        </div>
      </div> */}
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Type Here"
          defaultValue="Shubh"
        />
      </div>
    );
  }
}

export default App;
