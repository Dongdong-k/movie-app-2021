import React from "react";
import PropTypes from "prop-types";

// class component 작성
// return 반환하지 않음
class App extends React.Component {
  constructor(prop) {
    super(prop);
    console.log("constructor 호출");
  }
  state = {
    count: 0,
    name: "kim",
  };
  add = () => {
    this.setState({ count: this.state.count + 1 });
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("Mount 되었습니다.");
  }
  componentDidUpdate() {
    console.log("Update 되었습니다.");
  }
  render() {
    console.log("Render 되었습니다.");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>;
        <button onClick={this.add}>Add</button>;
        <button onClick={this.minus}>Mius</button>;
      </div>
    );
  }
}

export default App;
