import { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";

function App() {
  const [foodOrder, setFoodOrder] = useState({});

  const addFoodItem = (id, name, price) => {
    setFoodOrder((prevOrder) => {
      const newOrder = { ...prevOrder };
      newOrder[id] = {
        name,
        price,
        quantity: (newOrder[id]?.quantity || 0) + 1,
      };
      return newOrder;
    });
  };

  const rmvFoodItem = (id) => {
    setFoodOrder((prevOrder) => {
      const newOrder = { ...prevOrder };
      if (newOrder[id].quantity > 1)
        newOrder[id] = { ...newOrder[id], quantity: newOrder[id].quantity - 1 };
      else delete newOrder[id];
      return newOrder;
    });
  };

  return (
    <>
      <Header
        foodOrder={foodOrder}
        addFoodItem={addFoodItem}
        rmvFoodItem={rmvFoodItem}
      />
      <Meals addFoodItem={addFoodItem} />
    </>
  );
}

export default App;
