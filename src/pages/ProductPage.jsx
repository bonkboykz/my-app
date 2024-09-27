import { useLocation, useParams } from "react-router-dom";
import { products } from "./products";
import { useEffect, useState } from "react";

export const ProductPage = () => {
  const { productId } = useParams();

  const product = products.find(
    (product) => product.id.toString() === productId
  );

  const { search } = useLocation();

  const [variant, setVariant] = useState("default");

  useEffect(() => {
    const query = new URLSearchParams(search);

    setVariant(query.get("variant") || "default");
  }, [search]);

  return (
    <div>
      <h2>{product.title}</h2>

      <h3>Price: {product.price}</h3>

      <p>{product.description}</p>

      <p>Variant: {variant}</p>
    </div>
  );
};
