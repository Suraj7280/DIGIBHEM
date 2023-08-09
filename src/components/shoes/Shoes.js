import React, { useState } from "react";
import Header from "../header/Header";

import image2 from "../image/shoes1.png";

import image6 from "../image/shoes4.png";

import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Shoes() {
  const [item, setItem] = useState(
    [
      {
        pic: image2,
        title: "FAST Trendy Trainer Running shoes",
        price: "$15",
      },
      {
        pic: image6,
        title: "Digital Watch - For Men Brand",
        price: "$6",
      },
   ]
  );
  return (
    <>
      <Header />
      <div className="watchescontainer">
        <div className="wascontainer">
          <div className="search">
            <input type="text" placeholder="search" />
            <button type="button" className="but">
              Search
            </button>
            <AiOutlineShoppingCart
              style={{ height: "2rem", width: "2rem", marginLeft: "1rem" }}
            />
          </div>
        </div>
        <div className="containeritem">
          {item.map((item, key) => (
            <div className="subitem">
              <div className="boxcontent">
                <img src={item.pic} className="im-box" alt="watch" />
                <div className="descr">{item.title}</div>
                <div className="rate">{item.price}</div>
                <button className="buy-now">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
