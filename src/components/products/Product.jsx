import React from 'react';
import ProductImage from "./productImage"
const Product = ({product:{ imgUrl,name,price }}) => {
    return (
        <section className="product">
            <ProductImage src={imgUrl}/>
            <section className="info">
                <p>{name}</p>
                <section className="price">
                    <span> {price} </span>
                </section>
            </section>
        </section>
    );
};

export default Product;