import React, { useState, useEffect } from "react";
import { setTheme } from "./themes";
import "./styles.css";
function Toggle() {
  const [toggle, setToggle] = useState("light");
  let theme = localStorage.getItem("theme");
  const handleClick = () => {
    //If the user clicks the toggle and it is currently light, change it to dark
    if (theme === "theme-light") {
      setTheme("theme-dark");
      setToggle("dark");
    }
    //Otherwise, the default will be light
    else {
      setTheme("theme-light");
      setToggle("light");
    }
  };
  //Will change the value of toggle if the theme changes
  useEffect(() => {
    if (theme === "theme-dark") setToggle("dark");
    else if (theme === "theme-light") setToggle("light");
  }, [theme]);
  return (
    <div className="toggle">
      {toggle === "light" ? (
        <label className="switch">
          <input type="checkbox" onClick={handleClick} />
          <span className="slider round" />
        </label>
      ) : (
        <label className="switch">
          <input type="checkbox" onClick={handleClick} defaultChecked />
          <span className="slider round" />
        </label>
      )}
    </div>
  );
}
export default Toggle;
