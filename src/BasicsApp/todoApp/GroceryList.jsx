export const GroceryList = ({ title, id, handleDelete }) => {
  return (
    <div className="list" style={{ display: "flex" }}>
      <p>{title}</p>
      <button onClick={() => handleDelete(id)} className="btn ">
        Delete
      </button>
    </div>
  );
};
