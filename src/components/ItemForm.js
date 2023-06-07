import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItemData, setNewItemData] = useState({
    id: uuid(),
    name: "",
    category: "Produce",
  })

  function handleNewItemName(event) {
    setNewItemData({...newItemData, name: event.target.value});
  }

  function handleItemCategory(event) {
    setNewItemData({...newItemData, category: event.target.value})
  }

  function handleNewItemSubmission(e) {
    e.preventDefault();
    onItemFormSubmit(newItemData);
  }

  return (
    <form className="NewItem" onSubmit={handleNewItemSubmission}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewItemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
