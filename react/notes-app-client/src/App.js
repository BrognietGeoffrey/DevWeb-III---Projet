import React from "react";
import './App.css';
import { Login, Register } from "./component/loginRegister/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive : true
    };
  }

  componentDidMount() {
    this.rightSide.classList.add("right")
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    }
    else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.state(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "register" : "login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
            <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef = {ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive = {currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onclick={this.changeState.bind(this)} />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
    className="right-side"
    ref={props.containerRef}
    onclick={props.onclick}
    >
      <div className="inter-container">
        <div className="text">{props.current}</div>
      </div>
      </div>
  );
}

export default App;
