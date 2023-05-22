import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
function ToDofunction(props) {
  const [isHover, setHover] = useState(false);
  var [isChecked, setChecked] = useState(true);
  function handleMouseEnter(e) {
    setHover(true);
  }
  function handleMouseLeave() {
    setHover(false);
  }
  function handleChange(e) {
    isChecked = e.target.checked;
  }
  function handleClick(e) {
    if (isChecked) setChecked(false);
    props.onDelete(props.id);
  }

  return (
    <li>
      <div
        className="text-color "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <input type="checkbox" onChange={handleChange} />
        <e> {props.text} </e>
        <span className="icons">
          <button onClick={handleClick}>
            <DeleteIcon className={isHover ? "" : "icon-delete"} />
          </button>
        </span>
      </div>
    </li>
  );
}

export default ToDofunction;
