import React from "react";
import NavSearchbar from "../NavSearchbar/NavSearchbar";
import Qtifylogo from "../Qtifylogo/Qtifylogo";
import FeedbackButton from "../FeedbackButton/FeedbackButton";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <Qtifylogo />
      </a>
      <NavSearchbar placeholder="Search song of your choice" />
      <FeedbackButton>Give Feedback</FeedbackButton>
    </nav>
  );
};
export default Navbar;
