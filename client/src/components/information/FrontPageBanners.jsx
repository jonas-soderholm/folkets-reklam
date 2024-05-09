import React from "react";

const banner_text = [
  {
    Header: "Vad vill du förändra?1",
    info:
      "Banner info1 Banner info1 Banner info1 Banner info1 Banner info1 Banner info1 Banner info1 Banner info1 Banner info1 Banner info1 ",
  },
  {
    Header: "Hur fungerar folkets reklam?",
    info:
      "Banner info2 Banner info2 Banner info2 Banner info2 Banner info2 Banner info2 Banner info2 Banner info2 Banner info2 Banner info2 Banner info2 Banner info2 Banner info2 Banner info2 Banner info2 Banner info2 ",
  },
];

function AboutBanner() {
  return (
    <>
      <div className="relative bg-[#e1e1e1]">
        <div className=" bg-[#b7b9b9] md:p-[8rem] p-[2rem]  mt-[-1.2rem]">
          <h1 className=" md:text-3xl text-2xl">{banner_text[0].Header}</h1>
          <p className=" md:text-xl text-s mt-7">{banner_text[0].info}</p>
        </div>

        <h1 className=" md:text-3xl text-2xl mx-6 mt-[8rem] mb-8">{banner_text[1].Header}</h1>
        <div className=" bg-[#69d79c] md:p-[8rem] p-[2rem] mx-6 rounded-xl mb-[8rem]">
          <p className=" md:text-xl text-s ">{banner_text[1].info}</p>
        </div>
      </div>
    </>
  );
}

export default AboutBanner;
