import React, { useState } from "react";

function CreateArea(props) {
  const [notes, setNotes] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setNotes((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value
      };
    });
  }

  function addNote(event) {
    props.onAdd(notes);
    setNotes({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          value={notes.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <hr />
        <textarea
          name="content"
          value={notes.content}
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
