import React from "react";

export const Home = () => {


  const handleClick = () => {
    console.log('hello');
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => handleClick()}>click</button>
    </div>
  );
};
