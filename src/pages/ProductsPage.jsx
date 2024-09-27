// https://kaspi.kz/shop/p/:id
// path params id = jandeks-stantsija-lait-yndx-00025-fioletovyi-101870266
// query params ?c=750000000&color=red

import { Link } from "react-router-dom";
import { products } from "./products";

export const ProductsPage = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      }}
    >
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="ProductCard"
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
              borderRadius: "5px",
            }}
          >
            <div>
              <h2>{product.title}</h2>
              <p>{product.price}</p>
              <p>{product.description}</p>

              <Link to={`/products/${product.id}`}>View Product</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
