import { forwardRef } from "react";

const CartModal = forwardRef(function CartModal(
  { foodOrder, addFoodItem, rmvFoodItem },
  ref
) {
  const totalPrice = Object.values(foodOrder)
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(3);

  return (
    <dialog ref={ref} className="modal cart">
      <h2>Your Cart</h2>

      <ul>
        {Object.entries(foodOrder).map(([id, item]) => (
          <li key={id} className="cart-item">
            <p>
              {item.name} - {item.quantity} x ${item.price}
            </p>
            <p className="cart-item-actions">
              <button onClick={() => rmvFoodItem(id)}>-</button>
              {item.quantity}
              <button onClick={() => addFoodItem(id, item.name, item.price)}>
                +
              </button>
            </p>
          </li>
        ))}
      </ul>

      <div className="cart-total">${totalPrice}</div>

      <form method="dialog" className="modal-actions">
        <button className="text-button">Close</button>
        <button className="button">Go to Checkout</button>
      </form>
    </dialog>
  );
});

export default CartModal;
