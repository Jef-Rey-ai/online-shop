import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Products from "../../components/Products";
import { PRODUCTS } from "../../data/products";

export default function Cart() {
  const { cartItems, resetCart } = useContext(ShopContext);
  return (
    <>
      <h3 className="ms-5" style={{ display: "inline" }}>
        Your Cart Items
      </h3>
      <button className="btn btn-danger ms-5" onClick={resetCart}>
        Reset Cart
      </button>
      <div className="container">
        <div className="row">
          {PRODUCTS.map((product) => {
            if (
              cartItems?.some(
                (cartItem) => cartItem.id === product.id && cartItem.count > 0
              )
            )
              return <Products key={product.id} data={product} />;
            else return "";
          })}
        </div>
      </div>
    </>
  );
}
