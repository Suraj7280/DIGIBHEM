import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Item.css";
import image from "../image/analog.png";
import image1 from "../image/bat1.png";
import image2 from "../image/shoes1.png";
import image3 from "../image/wat.png";
import image4 from "../image/bat2.png";
import image5 from "../image/watch.png";
import image6 from "../image/shoes4.png";
import image7 from "../image/bat3.png";
import image8 from "../image/watche.png";
import image9 from "../image/bat4.png";
import image10 from "../image/wathes.png";
import image11 from "../image/bat5.png";

export default function Item() {
  const [item, setItem] = useState([
    {
      pic: image,
      title: "Digital Watch - For Men Brand",
      price: "$12",
    },
    {
      pic: image1,
      title: "LYCAN Junior Cricket Bat Size 3",
      price: "$10",
    },
    {
      pic: image2,
      title: "FAST Trendy Trainer Running shoes",
      price: "$15",
    },
    {
      pic: image3,
      title: "Digital Watch - For Women Brand",
      price: "$14",
    },
    {
      pic: image4,
      title: "MRF ENDORSED | for Light and Hard",
      price: "$9",
    },
    {
      pic: image5,
      title: "Black Watch - For Men Brand ",
      price: "$10",
    },
    {
      pic: image6,
      title: "Grey and White running shoes",
      price: "$6",
    },
    {
      pic: image7,
      title: "Trendy Running Shoes Running",
      price: "$17",
    },
    {
      pic: image8,
      title: "Combo Watch - For Men Brand",
      price: "$14",
    },
    {
      pic: image9,
      title: "LYCAN Full Size Pvc Hard Plastic",
      price: "$12",
    },
    {
      pic: image10,
      title: "Digital Watch - For women Brand",
      price: "$15",
    },
    {
      pic: image11,
      title: "Tucker Full Size Pvc Hard Plastic",
      price: "$16",
    },
  ]);

  return (
    <div className="item">
      {item.map((item, key) => (
        <Link to={`/Itembuy/${item.title}`} className="textdeco">
          <div className="subitem">
            <div className="boxcontent">
              <img src={item.pic} className="im-box" alt={item.title} />
              <div className="descr">{item.title}</div>
              <div className="rate">{item.price}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
