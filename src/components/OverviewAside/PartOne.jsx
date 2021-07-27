import React from "react";

import bell from "../../assets/bell-solid.svg";
import edit from "../../assets/edit-solid.svg";

import bagAside from "../../assets/bagAside.svg";
import usersAside from "../../assets/usersAside.svg";

const PartOne = () => {
  return (
    <div className="part-one">
      <div className="part-one__btns">
        <div className="part-one__img-container">
          <img
            alt=""
            src={bell}
            height="30"
            width="30"
          />
        </div>

        <div className="part-one__img-container">
          <img
            alt=""
            src={edit}
            height="25"
            width="25"
          />
        </div>
      </div>

      <div className="part-one__circle"></div>

      <div className="part-one__summary">
        <p className="part-one__summary--title">Konter Pulsa</p>

        <div className="summary-block">
          <div className="summary-block--section">
            <img
              alt=""
              src={bagAside}
              height="25"
              width="25"
            />
            <div className="block--text">
              <p>2.580</p>
              <span>Products</span>
            </div>
          </div>

          <div className="summary-block--divide"></div>

          <div className="summary-block--section">
            <img
              alt=""
              src={usersAside}
              width="25"
              height="25"
            />
            <div className="block--text">
              <p>2.580</p>
              <span>Followers</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PartOne;