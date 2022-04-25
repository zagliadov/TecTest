import React, { useState } from "react";

export const sum = (a, b) => {
  return a + b;
};
export const Expenses = () => {
  const [data, setData] = useState(false);

  const handleClick = () => {
    setData(!data);
    console.log(data)
  }
  return (
    <div className="flex flex-col">
      <h2 className="text-center py-4">Expenses:</h2>

      <div role="tablist" className="flex flex-col">
        <button role="tab" onClick={() => handleClick()} aria-selected="true">
          Native
        </button>
        <button role="tab" aria-selected="false">
          React
        </button>
        <button role="tab" aria-selected="false">
          Cypress
        </button>
      </div>
    </div>
  );
};
