import { useEffect, useState } from "react";

export default function Meals() {
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
        let imageSrc = "../backend/public/";
        imageSrc += item.image;

        return (
          <div key={item.id} className="meal-item">
            <img src={imageSrc} alt="item" />
            <h3>{item.name}</h3>
            <div className="meal-item-price">{item.price}</div>
            <div className="meal-item-description">{item.description}</div>
            <button className="button">Add to Cart</button>
          </div>
        );
      })}
    </section>
  );
}
