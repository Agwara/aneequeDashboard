import React from "react";

import OverviewCardItems from "./OverviewCardItems";
import "./OverviewCards.css";
import cartIcon from "../../assets/buy.svg"
import bagOrange from "../../assets/bagOrange.svg";
import usersGreen from "../../assets/usersGreen.svg";
import pieChart from "../../assets/pie-chart.svg";


const OverviewCard = () => {
  return (
    <div className="overview-cards">
      <p className="primary-title">Overview</p>

      {/* <img
        alt=""
        src={pieChart}
        height="25"
        width="25" 
      /> */}

      <div className="overview-cards__items">
        <OverviewCardItems 
          icon={bagOrange} 
          amount="$27,340.00"
          percent="+24%"
          itemText="Total Sales"
          percentColour="#54B092"
        />

        <OverviewCardItems 
          icon ={pieChart} 
          amount="$27,340.00"
          percent="-32%"
          itemText="Total Expenses"
          percentColour="#F2516D"
        />

        <OverviewCardItems 
          icon ={usersGreen} 
          amount="$18,260.00"
          percent="+48%"
          itemText="Total Visitors"
          percentColour="#54B092"
        />

        <OverviewCardItems 
          icon ={cartIcon} 
          amount="$11,340.00"
          percent="-12%"
          itemText="Total Orders"
          percentColour="#F2516D"
        />
      </div>
    </div>
  )
}

export default OverviewCard;