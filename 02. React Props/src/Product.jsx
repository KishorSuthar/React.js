import "./Product.css";
function Product({ title, price }) {
  return (
    <div className="product">
      <h2>{title}</h2>
      <h4>Price : {price}</h4>
    </div>
  );
}

export default Product;
