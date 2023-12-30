import React, { useState } from "react";

const VsDarkModeToggle = ({ onChange, toggleText }) => {
  return <button onClick={onChange}>{toggleText}</button>;
};

export default VsDarkModeToggle;
