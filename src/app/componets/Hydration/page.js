import React from 'react'
import "./Hydration.css"

function Hydration() {
  const bottles = [
    {
      id: 1,
      name: "Rainbow 600",
      image: "/images/images1.png",
    },
    {
      id: 2,
      name: "Rio 650",
      image: "/images/images2.png",
    },
    {
      id: 3,
      name: "Big Bull 1300",
      image: "/images/images3.png",
    },
    {
      id: 4,
      name: "Rome 600",
      image: "/images/images4.png",
    },
    {
      id: 5,
      name: "Rainbow 600",
      image: "/images/images5.png",
    },
    {
      id: 6,
      name: "Rio 650",
      image: "/images/images6.png",
    },
  ];

  return (
    <div className="hydration-container">
      <div className="header">
        <div className="title">
          <h1>Hydration Essentials</h1>
          <p>Discover Our Range of Premium Water Bottles</p>
        </div>
        <button className="view-more">VIEW MORE</button>
      </div>

      <div className="bottles-grid">
        {bottles.map((bottle) => (
          <div key={bottle.id} className="bottle-card">
            <img src={bottle.image} alt={bottle.name} />
            <h3>{bottle.name}</h3>
            <button className="learn-more">LEARN MORE</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hydration;
