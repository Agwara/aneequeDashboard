import React from "react";

import nikon from "../../assets/nikon.jpg";
import nokiaPhone from "../../assets/nokiaPhone.png";
import headPhone from "../../assets/headphone.jpg";
import RecentOrdersItem from "./RecentOrdersItem";

const RecentOrders = () => {
  return (
    <div className="recent-orders">
      <div className="recent-orders__title">
        <p className="recent-orders__title--text1">Recent Orders</p>
        <p className="recent-orders__title--text2">See All</p>
      </div>

      <div className="recent-orders__list">
        <RecentOrdersItem
          photo={nokiaPhone}
          name="Redmi 4X"
          orderTime="2 Minutes Ago"
          price="+$80.00"
        />

        <RecentOrdersItem
          photo={headPhone}
          name="Acer E1-421"
          orderTime="2 Minutes Ago"
          price="+$80.00"
        />

        <RecentOrdersItem
          photo={nikon}
          name="Nikon D3500"
          orderTime="2 Minutes Ago"
          price="+$80.00"
        />
      </div>
    </div>
  )
}

export default RecentOrders