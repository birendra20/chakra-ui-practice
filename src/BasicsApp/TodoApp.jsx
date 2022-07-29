import React, { useRef, useState } from "react";
import { nanoid } from "nanoid";
import { Box, AspectRatio, Button } from "@chakra-ui/react";

const TodoApp = () => {
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);

  const handleAdd = (data) => {
    const payload = {
      title: data,

      id: nanoid(9),
    };
    setTask([payload, ...task]);
  };

  const handleDelete = (id) => {
    setTask((prev) => prev.filter((element) => element.id !== id));
  };

  return (
    <div>
      <div>
        <input
          style={{ border: "1px solid black" }}
          type="text"
          value=""
          onChange={(e) => {
            setText(e.target.value.toUpperCase());
          }}
        />
        <Button
          onClick={() => {
            handleAdd(text);
          }}
        >
          Add Item
        </Button>
      </div>
      <div>
        {task.map((item) => {
          return (
            <div className="list" style={{ display: "flex" }}>
              <p>{item.title}</p>
              <button onClick={() => handleDelete(item.id)} className="btn ">
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoApp;
