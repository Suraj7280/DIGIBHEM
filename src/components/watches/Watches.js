import React, { useState } from "react";
import Header from "../header/Header";
import "./Watches.css";
import image from "../image/analog.png";
import image3 from "../image/wat.png";
import image5 from "../image/watch.png";
import image8 from "../image/watche.png";
import image10 from "../image/wathes.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import DialogBox from "../dialogbox/DialogBox";

export default function Watches() {
  const [item, setItem] = useState([
    {
      pic: image,
      title: "Digital Watch - For Men Brand",
      price: "$12",
    },
    {
      pic: image3,
      title: "Digital Watch - For Women Brand",
      price: "$14",
    },

    {
      pic: image5,
      title: "Black Watch - For Men Brand ",
      price: "$10",
    },

    {
      pic: image8,
      title: "Combo Watch - For Men Brand",
      price: "$14",
    },
    {
      pic: image10,
      title: "Digital Watch - For women Brand",
      price: "$15",
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

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
                <button className="buy-now" onClick={openDialog}>
                  Buy Now
                </button>
                <DialogBox isOpen={isDialogOpen} onClose={closeDialog}>
                  <h4>Your Order</h4>
                  <hr />
                  <div>
                    <img src={item.pic} className="cart" alt={item.title} />
                    <span className="descri">
                      <b>{item.title}</b>
                    </span>
                  </div>
                  <div style={{ marginTop: "0.5rem" }}>
                    <b>+</b> Add Your Address{" "}
                  </div>
                  <h6 style={{ marginTop: "0.5rem" }}>Payment Option</h6>
                  <div>
                    <b>+ </b>PhonePay
                  </div>
                  <div>
                    <b>+ </b>GooglePay
                  </div>
                  <div>
                    <b>+ </b>Cash On Delievery
                  </div>
                </DialogBox>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
