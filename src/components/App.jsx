import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [note, setNote] = useState([]);

  function addNote(notes) {
    setNote((prevNote) => {
      return [...prevNote, notes];
    });
  }

  function deleteNote(id) {
    setNote((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {note.map((noteItem, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      
    </div>
  );
}

export default App;
