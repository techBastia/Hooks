import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export const Crud = () => {
  const [addData, setAddData] = useState("");
  const [val, setVal] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  const addItem = () => {
    setVal((prevVal) => [...prevVal, { id: Date.now(), text: addData }]);
    setAddData("");
  };

  const deleteItem = (id) => {
    const updatedVal = val.filter((item) => item.id !== id);
    setVal(updatedVal);
  };

  const editItem = (id) => {
    const itemToEdit = val.find((item) => item.id === id);
    setAddData(itemToEdit.text);
    deleteItem(id);
  };

  const updateItem = () => {
    setVal((prevVal) => [
      ...prevVal,
      { id: editItemId, text: addData },
    ]);
    setAddData("");
  };

  return (
    <>
      <h1>This Is A Crud App</h1>

      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={addData}
        onChange={(e) => setAddData(e.target.value)}
      />

      {editItemId ? (
        <Button variant="contained" color="primary" onClick={updateItem}>
          Update
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={addItem}>
          Add
        </Button>
      )}

      {val.map((item) => (
        <div key={item.id}>
          <p>
            {item.text}
            <span onClick={() => deleteItem(item.id)}> delete</span>
            <span onClick={() => editItem(item.id)}> edit</span>
          </p>
        </div>
      ))}
    </>
  );
};
