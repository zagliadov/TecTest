import React from "react";
import axios from "axios";

export const Home = () => {
  let a;
  let b;
  const handleClick = async () => {
    console.log("hello");
    a = await axios.post('http://localhost:8080/api/get_token')
    console.log(b)
  };

  return (
    <div>
      <video src="http://localhost:8080/room"></video>
      <h1>Home</h1>
      <button onClick={() => handleClick()}>click</button>
    </div>
  );
};
