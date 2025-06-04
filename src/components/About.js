import { Component } from "react";
// import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor called");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount Called");
  }
  render() {
    // console.log("Parent Render called");
    return (
      <div>
        <h1>About</h1>
        <h2>This is a React Series</h2>
        {/* <User name={"Kanish Kainth(function)"}/>   */}

        <UserClass
          name={"Kanish Kainth (class)"}
          location={"Patiala (class)"}
          contact={"@kanish (class)"}
        />
      </div>
    );
  }
}

export default About;
