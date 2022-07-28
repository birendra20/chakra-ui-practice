import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { nanoid } from "nanoid";

export const Grocery = () => {
  const [grocerys, setGrocery] = useState([]);

  const addGrocery = (data) => {
    const payload = {
      title: data,
      status: false,
      id: nanoid(9),
    };
    setGrocery([...grocerys, payload]);
  };

  const handleDelete = (id) => {
    setGrocery((prev) => prev.filter((element) => element.id !== id));
  };

  return (
    <>
      <div>
        <GroceryInput handleAdd={addGrocery} />
      </div>
      <div>
        {grocerys.map((item) => {
          return (
            <GroceryList {...item} key={item.id} handleDelete={handleDelete} />
          );
        })}
      </div>
    </>
  );
};
