import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
function Note(props) {
  function handleClcik() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClcik}><DeleteIcon /></button>
      {/* <button onClick={handleClcik}>Delete</button> */}
    </div>
  );
}

export default Note;
