import { React } from "react";
import "../css/Note.css";
import { Checkbox } from "@material-ui/core";

function Note(props) {
  function removeNote() {
    props.remove(props.id);
  }
  return (
    <div className={`note ${props.class}`}>
      <Checkbox checked={false} value="checkedA" onClick={removeNote} />
      <h3 className="msg">{props.msg}</h3>
    </div>
  );
}

export default Note;
