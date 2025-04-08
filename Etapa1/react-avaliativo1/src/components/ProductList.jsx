import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const addProduct = () => {
        if (name.trim() === "" || price.trim() === "") return;
        setProducts([...products, { id: Date.now(), name, price: parseFloat(price) }]);
        setName("");
        setPrice("");
    };

    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <input type="text" placeholder="Nome do Produto" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Preço" value={price} onChange={(e) => setPrice(e.target.value)} />
            <button onClick={addProduct}>Adicionar Produto</button>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {products.map((product) => (
                    <li key={product.id} style={{ margin: "10px 0" }}>
                        <ProductCard name={product.name} price={product.price} />
                        <button onClick={() => deleteProduct(product.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
