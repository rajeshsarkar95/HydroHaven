/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './Section.css'

function Section() {
  return (
    <div className="section-container">
      <div className="background-container">
        <img
          src="images/back_img.jpg"
          alt="Mountain landscape"
          className="background-image"
        />
        <div className="overlay"></div>
      </div>
      <div className="content-container">
        <p className="tagline">
          YOUR TRANSFORMATION, ONE STEP AT A TIME
        </p>
        <h1 className="main-heading">
          Fitness is a journey—every day brings you closer to the life you want
        </h1>
      </div>
    </div>
  )
}

export default Section; 