import React from "react";

const ProductCard = ({ name, price, addToCart }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <p><strong>Produto:</strong> {name}</p>
      <p><strong>Preço:</strong> R$ {price.toFixed(2)}</p>
      <button onClick={addToCart}>Adicionar ao carrinho</button>
    </div>
  );
};

export default ProductCard;
