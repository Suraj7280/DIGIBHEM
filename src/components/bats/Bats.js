import React, { useState } from "react";
import Header from "../header/Header"

import image1 from "../image/bat1.png";


import image4 from "../image/bat2.png";


import image7 from "../image/bat3.png";

import image9 from "../image/bat4.png";

import image11 from "../image/bat5.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Bats() {
    const [item, setItem] = useState([
        {
          pic: image1,
          title: "LYCAN Junior Cricket Bat Size 3",
          price: "$10",
        },
        {
          pic: image4,
          title: "MRF ENDORSED | for Light/Hard",
          price: "$9",
        },
        {
          pic: image7,
          title: "Trendy Running Shoes Running",
          price: "$17",
        },
        {
          pic: image9,
          title: "LYCAN Full Size Pvc/ Hard Plastic",
          price: "$12",
        },
        {
          pic: image11,
          title: "Tucker Full Size Pvc/ Hard Plastic",
          price: "$16",
        },
      ]);
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
