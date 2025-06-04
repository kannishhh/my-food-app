import React from "react";
import { GIT_API } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default Location",
        id: "Default ID",
        // avatar_url: "https//dummmy-photo",
      },
    };
    console.log("Child Constructor called");
  }

  async componentDidMount() {
    console.log("Child Component Did Mount Called");

    const data = await fetch(GIT_API);
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Child Component Did Update Called");
  }
  componentWillUnmount() {
    console.log("child Component Will Unmount Called");
  }
  render() {
    const { name, location, id, avatar_url } = this.state.userInfo;

    console.log("Child Render Called");
    return (
      <div className="user-card">
        <img className="user-avatar" src={avatar_url} alt="User Avatar"></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @kanish</h4>
        <h4>Id: {id}</h4>
      </div>
    );
  }
}

export default UserClass;
