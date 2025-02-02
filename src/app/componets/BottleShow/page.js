/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./Bottle.css";
import Image from "next/image";

function BottleShow() {
  const categories = [
    { id: 1, name: "Vacuum Bottles", icon: "/hand_icons/first.png" },
    { id: 2, name: "Fridge Bottles & Jugs", icon: "/hand_icons/second.png" },
    { id: 3, name: "Borosilicate Bottles", icon: "/hand_icons/third.png" },
    { id: 4, name: "Kettles", icon: "/hand_icons/forth.png" },
  ];
  return (
    <div>
      <div className="bottle_conatainer">
        <div className="first_conatainer">
          <Image
            className="hand_bottle"
            src="/icons/handbottle.png"
            width={500}
            height={500}
            alt="Hand_bottle"
          />
        </div>
        <div className="second_conatainser">
          <div className="category-container">
            {categories.map((category) => (
              <div key={category.id} className="category-item">
                <Image
                  src={category.icon}
                  alt={category.name}
                  className="category-icon"
                  width={100}
                  height={100}
                />
                <span className="category-text">{category.name}</span>
              </div>
            ))}
          </div>
          <div className="bottle_image">
            <img

            src="/hand_icons/bottles.png"
            className="bottle-slect"
            alt="bottle_images"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottleShow;
