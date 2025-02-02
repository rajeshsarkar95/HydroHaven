import React from "react";
import "./Navbar.css";
import Image from "next/image";

function Navbar() {
  return (
    <div>
      <div className="nav_container">
        <div className="Nav_logo">
          <Image
            className="Nav_logo_Im"
            src="/icons/logo.png"
            width={140}
            height={30}
            alt="Logo"
          />
        </div>
        <div className="item_list">
          <li className="list_item">Shop</li>
          <li className="list_item">Contact us</li>
          <li className="list_item">About </li>
          <li className="list_item">lournal</li>
          <li className="list_item">Custom</li>
          <button className="Inquiry_button">Inquiry Now</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
