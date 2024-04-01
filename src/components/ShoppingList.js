import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchFor, setSearchFor]=useState('')
  
  function handleSubmit(newItem){
  
    setItems([...items, newItem])

  }

  function handleSearch(event){
    setSearchFor(event.target.value)
    console.log(searchFor)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (searchFor === '') return true;

    return item.name.includes(searchFor);
  })

  /*const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });*/

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit} />
      <Filter search= {searchFor} onSearchChange={handleSearch} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
