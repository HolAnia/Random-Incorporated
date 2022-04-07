import React from 'react';
import { ProductFoto, ProductsWrapper, ProductText } from './ProductsStyles';
import foto from '../../images/product.png';
import { changeColor, backColor } from '../../assets/cursorColor';

const Products = () => {
    return (
        <ProductsWrapper onMouseEnter = { changeColor } onMouseLeave = { backColor }>
            <ProductText>Ładny tekst o produktach firmy <span>random</span></ProductText>
            <ProductFoto url = { foto } />
        </ProductsWrapper>
    )
};

export default Products;
