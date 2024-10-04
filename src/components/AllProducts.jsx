import "./ProudProducts.css";
import { items } from "./AllData";
import { Link } from "react-router-dom";

function AllProducts() {
  const filteredItems = items.filter((item) => item.id <= 50);

  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className="product normal">
          <Link
            onClick={() => window.top(0, 0)}
            to={`/salam-enterprises-eccomerce-website/categories/product/${item.id}`}
          >
            <div className="product-header">
              <img src={item.img} alt="product1" />
            </div>
            <div className="product-details">
              <p>{item.description}</p>
              <p className="item-price">{item.price}$</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default AllProducts;
