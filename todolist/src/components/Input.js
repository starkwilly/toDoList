import React from "react";
import "../css/Input.css";

function Input(props) {
  function handleSubmission(e) {
    if (props.item === "") {
      props.changeItem("");
    } else {
      props.changeItems([...props.items, props.item]);
      props.changeItem("");
    }
    e.preventDefault();
  }

  function handleChange(e) {
    var value = e.target.value;
    props.changeItem(value);
  }
  return (
    <div className="input">
      <form action="/" onSubmit={handleSubmission}>
        <input
          id="note"
          value={props.item}
          onChange={handleChange}
          placeholder="What's on your mind?"
        />
        <input type="submit" id="submit" />
      </form>
    </div>
  );
}

export default Input;
