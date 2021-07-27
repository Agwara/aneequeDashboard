import React from "react";

import PartOne from "./PartOne";
import Reputaion from "./Reputation";
import RecentOrders from "./RecentOrders";

import "./OverviewAside.css";

const OverviewAside = () => {
  return (
    <div className="overview-aside">
      <PartOne />

      <Reputaion />

      <RecentOrders />
    </div>
  )
}

export default OverviewAside;