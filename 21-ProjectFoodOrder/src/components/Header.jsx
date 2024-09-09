import { useRef } from "react";
import CartModal from "./CartModal";

export default function Header() {
  const dialog = useRef();

  function showCartModal() {
    dialog.current.showModal();
  }

  return (
    <section id="main-header">
      <div id="title">
        <img src="logo.jpg" alt="logo" />
        <h1>Reactfood</h1>
      </div>

      <button onClick={showCartModal} className="text-button">
        Cart
      </button>

      <CartModal ref={dialog} />
    </section>
  );
}
