import React, { useEffect } from "react";
import OnGoingCommercials from "../commercials/OnGoingCommercials";
import { useScrollEffect } from "./useScrollEffect";

function Hero() {
  const { backgroundZoom, textZoom } = useScrollEffect();

  // Effect to handle background and text zooming on scroll over hero image
  useEffect(() => {
    const backgroundImage = document.getElementById("backgroundImage");

    if (backgroundImage) {
      backgroundImage.style.backgroundSize = `${backgroundZoom}%`;
      backgroundImage.style.backgroundPosition = "center";
    }
  }, [backgroundZoom]);

  return (
    <div className="mainPage relative h-screen">
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
      <div className="ongoingCommercials bg-slate-200 rounded-2xl p-3 pt-4 -translate-y-[20rem]">
        {/* Commercials */}
        <OnGoingCommercials />
      </div>
    </div>
  );
}

export default Hero;
