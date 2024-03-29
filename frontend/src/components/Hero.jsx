import React, { useEffect, useState } from "react";
import OnGoingCommercials from "./OnGoingCommercials";

function Hero() {
  const [backgroundZoom, setBackgroundZoom] = useState(100);
  const [textZoom, setTextZoom] = useState(30);

  // Effect to handle background and text zooming on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newBackgroundZoom = 100 + scrollY * 0.05; // Adjust the factor to control the zoom effect
      const newTextZoom = 30 + scrollY * 0.007; // Adjust the factor to control the zoom effect for text

      setBackgroundZoom(newBackgroundZoom);
      setTextZoom(newTextZoom);

      document.getElementById("backgroundImage").style.backgroundSize = `${newBackgroundZoom}%`;
      document.getElementById("backgroundImage").style.backgroundPosition = "center"; // Center the background position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set initial background zoom
    document.getElementById("backgroundImage").style.backgroundSize = `${backgroundZoom}%`;
    document.getElementById("backgroundImage").style.backgroundPosition = "center";
  }, [backgroundZoom]);

  return (
    <div className="relative h-screen">
      {/* Hero background image */}
      <div
        id="backgroundImage"
        className="bg-fixed h-full w-full relative"
        style={{ backgroundImage: 'url("./heroPhone.webp")', backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      {/* Hero information */}
      <div
        className="header bg-fixed flex justify-center items-center fixed 
      top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5"
        style={{ top: "20%", left: "50%", transform: "translate(-50%, -50%)", fontSize: `${textZoom}px` }} // Center the "Hello" text both horizontally and vertically
      >
        <h1 className=" text-white text-center">Gör din röst hörd!</h1>
      </div>
      <div className="Content bg-slate-200 rounded-2xl p-3 pt-4 -translate-y-[20rem]">
        {/* Commercials */}
        <OnGoingCommercials />
      </div>
    </div>
  );
}

export default Hero;
