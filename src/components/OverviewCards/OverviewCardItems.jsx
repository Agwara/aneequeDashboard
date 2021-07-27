import React from "react";

const OverviewCardItems = (props) => {
  return (
    <div className="overview-items">
      <div className="overview-items__title">
        <img 
          src={props.icon} 
          alt="" 
          height="25" 
          width="25" 
        />
        <p className="overview-items--text" style={{color: props.percentColour}}>{props.percent}</p>
      </div>
      
      <p className="overview-items--text items--amount">{props.amount}</p>

      <p className="items--text-detail">{props.itemText}</p>
    </div>
  )
}

export default OverviewCardItems;