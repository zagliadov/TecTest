import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <header
      className={`text-slate-700 sm:h-[10vh] px-4 py-4 ${active ? "h-50 bg-slate-200" : "h-[10vh]"}`}
    >
      <button onClick={() => setActive(!active)} className={`sm:hidden border-2 rounded-3xl h-10 w-10`}>
        {active ? '-' : '+' }
      </button>
      <nav
        className={`${
          active ? "flex mt-0" : "flex mt-[-180px]"
        } sm:mt-0 py-5 px-4 w-full sm:w-2/5 h-[20vh] sm:h-auto sm:flex transition-all duration-300 justify-between flex-col sm:flex-row`}
      >
        <Link onClick={() => setActive(false)} to="/">
          Home
        </Link>
        <Link onClick={() => setActive(false)} to="/invoices">
          Invoices
        </Link>
        <Link onClick={() => setActive(false)} to="/expenses">
          Expenses
        </Link>
      </nav>
    </header>
  );
};
