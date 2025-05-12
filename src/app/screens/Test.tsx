// @ts-nocheck
import React from "react";
class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }

  changeColor = () => {
    this.setState({ color: "blue" });
  };

  /*
   1 -Right after the component is inserted into the DOM.
   ### UseCases 
    => Fetching data from an API
    => setting up subscriptions (like WebSockets or event listeners)
     => Initializing third-party libraries (e.g., charting, animations)
   ### Key - Points:
   => It's called only once in the component's lifecycle.
   => Safe place to interact with the DOM.
   */

  componentDidMount() {
    console.log("Component mounted!");
  }

  /*
  2. componentDidUpdate: when it called
  =>  After the component's props or state have changed, and it has re-rendered.
  UseCases:
  => Reacting to prop or state changes;
  => Manually updating the DOM
  Key Points:
  => Must be careful to avoid infinite loops
  => 
  */

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  /*
  3. ComponentWillMount: when it is called
  => Right before the component is removed from the DOM.
  UseCases:
  => Cleaning up subscriptions or timers
  => Canceling network requests
  => Unbinding event listeners
  KeyPoints:
  => Helps prevent memory leaks.
  => Think of it as the "cleanup" phase.
  */
  componentWillUnmount() {
    console.log("Component is being removed.");
  }

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {"  "}
          {this.state.model} {"  "}
          from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

export default Test;
