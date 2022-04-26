import React from 'react';

export const Search = ({ value, onChange, children}) => {

  return (
    <div>
      <img src="" alt="search images" />
      <label htmlFor="search">{children}</label>
      <input id="search" placeholder="search text..." type="text" value={value} onChange={onChange} />
    </div>
  )
}