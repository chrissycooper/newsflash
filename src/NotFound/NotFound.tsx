import React from "react";
import "./NotFound.css";

interface NotFoundProps {
  error?: string;
}

const NotFound = ({error}:NotFoundProps) => {
  let message = "";
  error ? message = error : message = "Uh Oh, something unexpected happened. Try refreshing the page.";
  return (
    <div className="err-message">
      <p>{message}</p>
    </div>
  )
}

export default NotFound;
