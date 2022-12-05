import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch () {
  const { searchvalue, setSearchValue } = React.useContext(TodoContext)
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
      
      />,
    ];
}

export { TodoSearch };