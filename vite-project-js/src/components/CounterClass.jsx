import React from "react";

export default class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "alejandro",
      age: 24,
      number: 0,
    };
  }

  render() {
    const HandleCounterClick = () => {
      this.setState((currentSate) => {
        return { number: currentSate.number + 1 };
      });
    };
    const HandleClick = () => {
      this.setState({ name: "programador" });
      this.setState({ age: this.state.age + 1 });
    };

    return (
      <>
        <h1 onClick={HandleClick}>
          hi {this.state.name} {this.state.age}
        </h1>
        <button onClick={HandleCounterClick}>
          Class Counter {this.state.number}
        </button>
      </>
    );
  }
}
