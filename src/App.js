import "./styles.css";
import React, { useState } from "react";
import Item from "./Item";
export default function App() {
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);
  function handleChange(event) {
    const val = event.target.value;
    setText(val);
  }
  function handleClick() {
    setArr((p) => {
      return [...p, text];
    });
  }
  function deleteItem(id) {
    setArr((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <input
        placeholder="add your item here.."
        className="input-field"
        value={text}
        onChange={handleChange}
        name="textField"
      />
      <button className="add-btn" onClick={handleClick}>
        {" "}
        Add{" "}
      </button>
      {arr.map((v, index) => {
        return <Item key={index} id={index} data={v} onChecked={deleteItem} />;
      })}
    </div>
  );
}
