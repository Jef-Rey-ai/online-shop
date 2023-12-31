// import Button from "react-bootstrap/Button";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { ShopContext } from "../context/ShopContext";

export default function Products({ data }) {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  // const isInCart = cartItems?.some((cartItem) => cartItem.id === data.id);

  return (
    <div className="col-3">
      {/* <img
        src={data.productImage}
        alt="Jef_Rey-Shop-Creator"
        className="w-100"
      /> */}
      {/* <h5>{data.productName}</h5> */}
      {/* <p>Price: {data.price}$</p> */}
      {/* <button className="btn btn-info btn-sm">+</button>
      <span className="mx-1">0</span>
      <button className="btn btn-info btn-sm">-</button><br /> */}
      <Card style={{ width: "18rem" }}>
        <Card.Img
          className="border border-secondary"
          variant="top"
          src={data.productImage}
        />
        <Card.Body className="border border-secondary bg-secondary text-light">
          <div className="bg-secondary">
            <Card.Title>{data.productName}</Card.Title>
            <Card.Text>Price: {data.price}$</Card.Text>
          </div>
          <button
            className="btn bg-warning btn-sm"
            onClick={() => addToCart(data.id)}
          >
            +
          </button>
          {cartItems.some(
            (cartItem) => cartItem.id === data.id && cartItem.count !== 0
          ) && (
            <span className="mx-1">
              {cartItems?.filter((row) => row.id === data.id)[0]?.count}
            </span>
          )}
          {cartItems.some(
            (cartItem) => cartItem.id === data.id && cartItem.count !== 0
          ) && (
            <button
              className="btn bg-warning btn-sm"
              onClick={() => removeFromCart(data.id)}
            >
              -
            </button>
          )}
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}
