import { forwardRef } from "react";

const CartModal = forwardRef(function CartModal(_, ref) {
  return (
    <dialog ref={ref} className="modal cart">
      <h2>Your Cart</h2>

      <ul>
        <li>Yo</li>
        <li>Yo</li>
        <li>Yo</li>
      </ul>

      <form method="dialog" className="modal-actions">
        <button className="text-button">Close</button>
        <button className="button">Go to Checkout</button>
      </form>
    </dialog>
  );
});

export default CartModal;
