import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import { useParams } from "react-router-dom";
import "./Itembuy.css";
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
import DialogBox from "../dialogbox/DialogBox";

export default function Itembuy() {
  const { title } = useParams();
  const [validPage, setValidPage] = useState(false);
  useEffect(() => {
    for (let i = 0; i < pages.length; i++) {
      if (title === pages[i].title) {
        setValidPage(true);
      }
    }
  }, []);

  const pages = [
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
  ];

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
      {validPage ? (
        pages.map((page, i) => {
          if (page.title === title) {
            return (
              <>
                <div className="wchescontainer">
                  <div className="wcontainer">
                    <div className="box">
                      <img
                        src={page.pic}
                        style={{
                          height: "15rem",
                          width: "14rem",
                          marginTop: "1rem",
                        }}
                        alt={page.title}
                      />
                    </div>
                    <div className="text-desc">
                      <b>Description:</b> {page.title}
                    </div>
                    <div>
                      <b>Price: {page.price}</b>
                    </div>
                    <button className="buy" onClick={openDialog}>
                      Buy Now
                    </button>
                    <DialogBox isOpen={isDialogOpen} onClose={closeDialog}>
                      <h4>
                        Your Order
                      </h4>
                      <hr />
                      <div>
                        <img src={page.pic} className="cart" alt={page.title} />
                        <span className="descri"><b>{page.title}</b></span>
                      </div>
                      <div style={{marginTop:"0.5rem"}}><b>+</b> Add Your Address </div>
                      <h6 style={{marginTop:"0.5rem"}}>Payment Option</h6>
                      <div><b>+  </b>PhonePay</div>
                      <div><b>+  </b>GooglePay</div>
                      <div><b>+  </b>Cash On Delievery</div>
                    </DialogBox>
                  </div>
                </div>
              </>
            );
          }
        })
      ) : (
        <>
          <h1>Not A Valid Page!!!</h1>
        </>
      )}
    </>
  );
}
