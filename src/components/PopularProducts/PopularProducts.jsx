import React from "react";

import ProductItem from "../../components/ProductItem/ProductItem";
import headphone from "../../assets/headphone.jpg";
import nokiaPhone from "../../assets/nokiaPhone.png";
import "./PopularProducts.css";

const PopularProducts = () => {
  return (
    <div className="popular-products">
      <p className="primary-title">Products</p>

      <div className="popular-products__title">
        <p>Photos</p>
        <p>Name</p>
        <p>Date</p>
        <p>Category</p>
        <p>Brand</p>
        <p>Price</p>
        <p>Status</p>
      </div>

      <ProductItem 
        photo={headphone}
        productName="Cowboy Hat"
        productID="#2807856940"
        date="Aug 12, 2020"
        category="Fashion"
        brand="Swallow"
        price="$99.89"
        status="available"
        viewers="18k viewers"
      />

      <ProductItem 
        photo={nokiaPhone}
        productName="Smart Phone"
        productID="#2807856940"
        date="Aug 12, 2020"
        category="Gadget"
        brand="Mito"
        price="$99.89"
        status="available"
        viewers="18k viewers"
      />
    </div>
  )
}

export default PopularProducts;