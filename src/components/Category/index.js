import React from 'react';
import spiritual from '../../assets/spiritual.jpg';
import garden from '../../assets/garden.jpg';
import './styles.scss';

const ProductCategory = props =>{
    return (
        <div className="productscategory">
            <div className="wrap">
                <div className="item" style={{
                    backgroundImage: `url(${spiritual})`
                }}>
                    <a>Shop Spritual Products</a>
                </div>

                <div className="item" style={{
                    backgroundImage: `url(${garden})`
                }}>
                    <a>Shop Garden Products</a>
                </div>
            </div>
        </div>
    )
}

export default ProductCategory;