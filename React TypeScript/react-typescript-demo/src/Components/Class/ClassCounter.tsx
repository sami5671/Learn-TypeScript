import { Component } from "react";

type CounterProps = {
  message: string;
};
type CounterState = {
  count: number;
};
export class ClassCounter extends Component<CounterProps, CounterState> {
  state = {
    count: 10,
  };
  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div className="">
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

export default ClassCounter;
