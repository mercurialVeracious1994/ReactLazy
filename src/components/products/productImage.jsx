import React from 'react';
import { Img } from 'react-image';

const ProductImage = ({src}) => {
    const MyLoader = () => <section className="image-placeholder">Loading...</section>;
    const MyErrorComponent = () => <div>Error loading image.</div>;

    return (
            <Img
                src={src}
                loader={<MyLoader />}
                unloader={<MyErrorComponent />}
                alt="product-thumbnail"
            />
    );
};

export default ProductImage;