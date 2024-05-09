import React, { useEffect } from "react";
import ActiveCommercials from "../commercials/ActiveCommercials";
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
    <>
      <div className="mainPage relative h-[60vh] overflow-hidden">
        {/* Hero background image */}
        <div
          id="backgroundImage"
          className="h-full w-full md:scale-[1.2] scale-[2.5] relative opacity-100"
          style={{
            backgroundImage: 'url("./flowers_4.webp")',
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            // backgroundRepeat: "repeat",
            // transform: "scale(2)",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        {/* Hero information */}
      </div>
      <div
        className="header flex justify-center items-center fixed 
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ top: "35%", left: "50%", transform: "translate(-50%, -50%)", fontSize: `${textZoom}px` }}
      >
        <h1 className="text-white text-center whitespace-nowrap">Gör din röst hörd!</h1>
      </div>
    </>
  );
}

export default Hero;
// -translate-y-[10rem]
