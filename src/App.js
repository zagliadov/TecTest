import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Invoices } from "./components/Invoices/Invoices";
import { Expenses } from "./components/Expenses/Expenses";

export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoices/*" element={<Invoices />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </>
  );
};
