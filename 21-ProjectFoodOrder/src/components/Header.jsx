import { useRef } from "react";
import CartModal from "./CartModal";

export default function Header({ foodOrder, addFoodItem, rmvFoodItem }) {
  const dialog = useRef();

  function showCartModal() {
    dialog.current.showModal();
  }

  const cartLen = Object.values(foodOrder).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <section id="main-header">
      <div id="title">
        <img src="logo.jpg" alt="logo" />
        <h1>Reactfood</h1>
      </div>

      <button onClick={showCartModal} className="text-button">
        Cart {cartLen ? "(" + cartLen + ")" : ""}
      </button>

      <CartModal
        ref={dialog}
        foodOrder={foodOrder}
        addFoodItem={addFoodItem}
        rmvFoodItem={rmvFoodItem}
      />
    </section>
  );
}
