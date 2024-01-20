import AllProducts from "../components/AllProducts";
import "../components/ProudProducts.css";
function OurProducts() {
  return (
    <div className="proud-container">
      <h2 className="container proud-h2 text-center">Our Products</h2>
      <div className="container">
        <div className="products-grid">
          <AllProducts />
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
