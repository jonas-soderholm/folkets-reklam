import React, { useEffect } from "react";
import { useScrollEffect } from "./useScrollEffect";

function Hero() {
  const { backgroundZoom, textOpacity } = useScrollEffect();

  useEffect(() => {
    const backgroundImage = document.getElementById("backgroundImage");
    const textElement = document.getElementById("heroText");

    if (backgroundImage) {
      backgroundImage.style.transform = `scale(${1 + backgroundZoom / 100})`;
      backgroundImage.style.backgroundPosition = "center";
    }
    if (textElement) {
      textElement.style.opacity = textOpacity;
    }
  }, [backgroundZoom, textOpacity]);

  return (
    <>
      <div className="mainPage relative h-[60vh] overflow-hidden">
        {/* Hero background image */}
        <div
          id="backgroundImage"
          className="fixed inset-0 w-full h-full bg-cover bg-no-repeat opacity-100"
          style={{
            backgroundImage: 'url("./flowers_4.webp")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        {/* Hero information */}
        <div
          id="heroText"
          className="header flex justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: textOpacity,
            textAlign: "center",
          }}
        >
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center whitespace-nowrap">
            Gör din röst hörd!
          </h1>
        </div>
      </div>
    </>
  );
}

export default Hero;
