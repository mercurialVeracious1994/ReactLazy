import React from 'react';
import productList from "../../data/products.json"
import Product from "./Product";

const Products = () => {
  return (
    <div className="products-container">
        {
             (productList.map((product,index) =>{
                return <Product key={`${product.name + index}`} product={product}/>
            }))
        }
    </div>
  );
};

export default Products;
