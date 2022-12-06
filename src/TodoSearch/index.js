import React from "react";
import './TodoSearch.css'

function TodoSearch ({ searchvalue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value)
  };
    return [
      <input 
      className="TodoSearch" 
      placeholder="ctg"
      value = {searchvalue}
      onChange={onSearchValueChange}
      disabled={loading}
      
      />,
    ];
}

export { TodoSearch };