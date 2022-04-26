import React, { useState } from "react";
import { useEffect } from "react";
import { Search } from "./components/Search/Search";

const getUser = () => Promise.resolve({id: 1, name: "Daniil"})
export const Expenses = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    loadUser();
  }, [])

  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-center py-4">Expenses:</h2>
      {user && <h2>Logged in as { user.name }</h2>}
      <Search value={search} onChange={handleSearch}>
        Search: 
      </Search>
      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
};
