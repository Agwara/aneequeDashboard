import React from "react";

import "./ProductItem.css";

const ProductItem = (props) => {
  return (
    <div className="product-item">
      <p className="product-image__container">
        <img
          alt=""
          src={props.photo}
          height="30"
          width="30"
        />
      </p>

      <div className="product-name__container">
        <p className="cell--main-text">{props.productName}</p>
        <p className="cell--primary-text">{props.productID}</p>
      </div>

      <p className="cell--main-text">{props.date}</p>

      <p className="cell--main-text">{props.category}</p>

      <p className="cell--main-text">{props.brand}</p>

      <p className="cell--price">{props.price}</p>

      <div className="product-name__container">
        <p className="cell--main-text">{props.status}</p>
        <p className="cell--primary-text">{props.viewers}</p>
      </div>
    </div>
  )
}

export default ProductItem