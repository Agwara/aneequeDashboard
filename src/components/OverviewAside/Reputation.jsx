import React from "react";

import star from "../../assets/star.svg";


const Reputation = () => {
  return (
    <div className="reputation">
      <p className="primary-title">Reputation</p>

      <div className="reputation__box">
        <div className="reputation__box--img-container">
          <img
            alt=""
            src={star}
          />
        </div>

        <div className="reputation__box--star-container">
          <div className="reputation__box--star-inner">
            <p>Star seller</p>
            <p>85%</p>
          </div>

          <div className="reputation__box--star-inner2">
            <div className="reputation__box--star-inner3"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reputation