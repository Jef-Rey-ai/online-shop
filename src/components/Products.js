import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export default function Products({ data }) {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  // const isInCart = cartItems?.some((cartItem) => cartItem.id === data.id);

  return (
    <div className="col-3">
      <img
        src={data.productImage}
        alt="Jef_Rey-Shop-Creator"
        className="w-100"
      />
      <h5>{data.productName}</h5>
      <p>Price: {data.price}$</p>

      <button
        className="btn bg-warning btn-sm"
        onClick={() => addToCart(data.id)}
      >
        +
      </button>

      {cartItems?.some(
        (cartItem) => cartItem.id === data.id && cartItem.count !== 0
      ) && (
        <span className="mx-1">
          {cartItems?.filter((row) => row.id === data.id)[0]?.count}
        </span>
      )}

      {cartItems?.some(
        (cartItem) => cartItem.id === data.id && cartItem.count !== 0
      ) && (
        <button
          className="btn bg-warning btn-sm"
          onClick={() => removeFromCart(data.id)}
        >
          -
        </button>
      )}

      <br />
    </div>
  );
}
