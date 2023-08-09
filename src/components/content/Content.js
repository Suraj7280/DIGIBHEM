import React from "react";
import "./Content.css";
//import { AiOutlineShoppingCart } from "react-icons/ai";
import Item from "../items/Item";
import { Link } from "react-router-dom";

export default function Content() {
  return (
    <div className="contet">
      <div className="left-c">
        <div className="category">
          <h2>Category</h2>
          <Link to="/watches" style={{ textDecoration: "none" }}>
            <h6>Watches</h6>
          </Link>
          <Link to="/bats" style={{ textDecoration: "none" }}>
            <h6>Bats</h6>
          </Link>
          <Link to="/shoes" style={{ textDecoration: "none" }}>
            <h6>Shoes</h6>
          </Link>
        </div>
      </div>
      <div className="right-c">
        <div className="search-co">
          <div className="search">
            <input type="text" placeholder="search" />
            <button type="button" className="but">
              Search
            </button>
            {/*<AiOutlineShoppingCart
              style={{ height: "2rem", width: "2rem", marginLeft: "1rem" }}
  />*/}
          </div>

          <Item />
        </div>
      </div>
    </div>
  );
}
