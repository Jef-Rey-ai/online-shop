export default function Products({ data }) {
  return (
    <div className="col-3">
      <img
        src={data.productImage}
        alt="Jef_Rey-Shop-Creator"
        className="w-100"
      />
      <h5>{data.productName}</h5>
      <p>Price: {data.price}$</p>
      <button className="btn btn-info btn-sm">+</button>
      <span className="mx-1">0</span>
      <button className="btn btn-info btn-sm">-</button>
    </div>
  );
}
