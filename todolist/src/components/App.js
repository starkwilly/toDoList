import "../css/App.css";
import { React, useState } from "react";
import Input from "./Input";
import Note from "./Note";

function App() {
  const [item, changeItem] = useState("");
  const [items, changeItems] = useState([]);

  function handleRemoval(id) {
    changeItems(items.filter((_, i) => i !== id));
  }
  return (
    <div className="app">
      <h1>My To-Do List</h1>
      {items.map((element, i) => (
        <Note
          class={i === items.length - 1 ? "last" : "other"}
          id={i}
          msg={element}
          remove={handleRemoval}
        />
      ))}
      <Input
        changeItem={changeItem}
        changeItems={changeItems}
        items={items}
        item={item}
      />
    </div>
  );
}

export default App;
