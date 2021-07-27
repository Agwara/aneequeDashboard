import React from "react";



const RecentOrdersItem = (props) => {
  return (
    <div className="recent-orders-item">
      <div className="order--details">
        <img
          alt=""
          src={props.photo}
          height="30"
          width="30"
        />

        <div className="order--details-name">
          <p>{props.name}</p>
          <span>{props.orderTime}</span>
        </div>
      </div>

      <p className="recent-orders__price">{props.price}</p>
    </div>
  )
}

export default RecentOrdersItem;