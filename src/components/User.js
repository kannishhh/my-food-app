import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  //   const [count2] = useState(2);

  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Click to Increase</button>
      {/* <h1>Count 2: {count2}</h1> */}
      <h2>Name: {name}</h2>
      <h3>Location: Patiala</h3>
      <h4>Contact: @kanish</h4>
    </div>
  );
  
};

export default User;
