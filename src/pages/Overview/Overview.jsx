import React from "react";

import SearchComponent from "../../components/SearchComponent/SearchComponent";
import OverviewCards from "../../components/OverviewCards/OverviewCards";
import OverviewAside from "../../components/OverviewAside/OverviewAside";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import Graph from "../../components/Graph/Graph";

import "./Overview.css";

const Overview = () => {
  return (
    <div className="overview hide-scroll-bar">
      <div className="overview__search"><SearchComponent /></div>
      <div className="overview__overview"><OverviewCards /></div>
      <div className="overview__graph hide-scroll-bar"><Graph /></div>
      <div className="overview__products"><PopularProducts /></div>
      <div className="overview__aside"><OverviewAside /></div>
    </div>
  )
}

export default Overview;