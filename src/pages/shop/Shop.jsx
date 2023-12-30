import Products from "../../components/Products";
import { PRODUCTS } from "../../data/products";

export default function Shop() {
  return (
    <div>
      <>
        <h1>WellCome to my Shop</h1>
        <div className="row">
          {PRODUCTS.map((product) => (
            <Products key={product.id} data={product} />
          ))}
        </div>
      </>
    </div>
  );
}
