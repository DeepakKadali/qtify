import React from "react";
import "./FeedbackButton.css"
const FeedbackButton = ({ children }) => {
  return <button className="button">{children}</button>;
};

export default FeedbackButton;
