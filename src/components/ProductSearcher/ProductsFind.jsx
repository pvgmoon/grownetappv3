import React from "react";
import useProductStore from "../../store/useProductStore";
import ProductCard from "../ProductCard";

function ProductsFind() {
  const filteredProducts = useProductStore((state) => state.filteredProducts);

  return (
    <div className="products">
      <p>You have {filteredProducts.length} found products:</p>
      <div className="favorite-items">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} id={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsFind;
