import "./Product.css";
function Product({ title, price, features }) {
  return (
    <div className="product">
      <h2>{title}</h2>
      <h4>Price : {price}</h4>
      <p>{features}</p>
    </div>
  );
}

export default Product;
