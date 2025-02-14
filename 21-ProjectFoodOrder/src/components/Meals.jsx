import { useEffect, useState } from "react";

export default function Meals({ addFoodItem }) {
  const [availableMeals, setAvailableMeals] = useState([]);

  const fetchMeals = async () => {
    const meals = await fetch("http://localhost:3000/meals");
    const data = await meals.json();
    setAvailableMeals(data);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <section id="meals">
      {availableMeals.map((item) => {
        return (
          <div key={item.id} className="meal-item">
            <img src={"../backend/public/" + item.image} alt="item" />
            <h3>{item.name}</h3>
            <div className="meal-item-price">{item.price}</div>
            <div className="meal-item-description">{item.description}</div>
            <button
              className="button"
              onClick={() => addFoodItem(item.id, item.name, item.price)}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </section>
  );
}
