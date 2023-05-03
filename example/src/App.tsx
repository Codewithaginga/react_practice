import { useState } from "react";
import "./App.css";
import Profile from "./profile";
import Products from "./products";
import ShoppingList from "./shoppingList";
import Airline from "./airline";
import Football from "./football";
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
      <div>
        <Airline
          kenya="Kenya Airways"
          Germany="Lufthansa"
          Rwanda="Rwanda Air"
        />
        <Airline
          kenya="Kenya Airways"
          Germany="Lufthansa"
          Rwanda="Rwanda Air"
        />
        <Airline
          kenya="Kenya Airways"
          Germany="Lufthansa"
          Rwanda="Rwanda Air"
        />
      </div>
      <div>
        <Football />
      </div>
    </>
  );
}

export default App;
