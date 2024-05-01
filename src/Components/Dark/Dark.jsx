import React from "react";
import './Dark.scss'

const Dark = ({toggleDarkMode}) => {
  return (
    <div>
      <label class="switch">
        <input type="checkbox" onChange={toggleDarkMode} />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default Dark;
