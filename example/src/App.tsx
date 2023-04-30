import { useState } from "react";
import "./App.css";
import Profile from "./Profile";
import Products from "./products";
import ShoppingList from "./shoppingList";
function App() {
  return (
    <>
      <div className="App">
        <h1>Welcome to my app</h1>

        <Profile jina="Brian" classOf={2017} Mahali="Busia" />
      </div>
      <div>
        <Products />
      </div>
      <div>
        <ShoppingList />
      </div>
    </>
  );
}

export default App;
