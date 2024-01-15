import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency";
import "./Cart.css";

function Cart() {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (
    <section className={`cart ${isCartVisible ? "cart--active" : ""}`}>
      
      {cartItems.length === 0 && (
        <span>Carrinho vazio</span>
      )}

      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>
      <div>total de itens: {cartItems.length}</div>
      <div className="cart-resume">{formatCurrency(totalPrice, "BRL")} </div>
    </section>
  );
}

export default Cart;
