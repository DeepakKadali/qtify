import React from "react";
import { ReactComponent as SeachIcon } from "../../assets/Search-icon.svg";
import "./NavSearchbar.css"
const NavSearchbar = ({ placeholder }) => {

  const onSubmit = (e) => {
    e.preventDefault();
    // handle search
    console.log("handle Search");
  }
  return (
    <form className="form" onSubmit={(e)=>onSubmit(e)}>
      <input className="input" required placeholder={placeholder} />
      <button className="search-button" type="submit">
        <SeachIcon />
      </button>
    </form>
  );
};

export default NavSearchbar;
