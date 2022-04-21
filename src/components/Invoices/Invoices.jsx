import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Members } from "./components/Members/Members";
import { Recording } from "./components/Recording/Recording";

export const Invoices = () => {
  return (
    <div className="flex flex-col border-2">
      <h2 className="text-center py-4">Invoices</h2>
      <div className="flex">
        <div className="border-2 w-1/2">1</div>
        <div className="border-2 w-1/2 flex flex-col justify-around">
          <div className="flex justify-around">
            <Link to="/invoices/members">members</Link>
            <Link to="/invoices/recording">recording</Link>
          </div>

          <div>
            <Routes>
              <Route path="/members" element={<Members />} />
              <Route path="/recording" element={<Recording />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
