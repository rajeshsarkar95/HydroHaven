import React from "react";
import Navbar from "./componets/Navbar/page";
import Home from "./componets/Home/page";
import BottleShow from "./componets/BottleShow/page";
import Hydration from "./componets/Hydration/page";
import Section from "./componets/section/page";
import Footer from "./componets/footer/page";

function page() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <BottleShow/>
      <Hydration/>
      <Section/>
       <Footer/>
    </div>
  );
}

export default page;
