import { useState } from "react";

export const GroceryInput = ({ handleAdd }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        style={{ backgroundColor: "wheat", border: "1px solid red" }}
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAdd(text);
        }}
      >
        Add Item
      </button>
    </div>
  );
};
