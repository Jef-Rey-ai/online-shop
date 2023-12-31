import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Products from "../../components/Products";
import { PRODUCTS } from "../../data/products";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);
  return (
    <>
      <h3>Your Cart Items</h3>
      <div className="container">
        <div className="row">
          {PRODUCTS.map((product) => {
            if (
              cartItems.some(
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
