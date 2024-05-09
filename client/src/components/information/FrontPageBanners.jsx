import React from "react";

const banner_text = [
  {
    Header: "Vad vill du se för förändring där du bor?",
    info:
      "Med Folkets Reklam kan du donera till reklamkampanjer som du tror på och vill se i Stockholm. Främja hållbarhet, öka medvetenheten om viktiga samhällsfrågor eller sprid glädje och gemenskap. Tillsammans kan vi skapa en stad som speglar våra värderingar och önskemål. Gör din röst hörd och bidra till att göra Stockholm ännu bättre!",
  },
  {
    Header: "Hur fungerar folkets reklam?",
    info:
      "På Folkets Reklam kan du enkelt donera till reklamkampanjer som redan finns på vår hemsida. Från miljövänliga initiativ till samhällsfrågor, välj kampanjer som betyder mest för dig. Din donation går direkt till att sätta upp dessa reklamer runt om i Stockholm. Gör din röst hörd genom att donera idag!",
  },
];

function AboutBanner() {
  return (
    <>
      <div className="relative bg-[#e1e1e1] justify-center">
        <div className=" bg-[#eb9f8f] md:p-[13rem] p-[2rem]  mt-[-1.2rem]">
          <h1 className=" md:text-5xl text-2xl md:mt-[0rem] mt-[6rem] max-w-[40rem]">{banner_text[0].Header}</h1>
          <p className=" md:text-xl text-s mt-7 md:mb-[0rem] mb-[6rem] max-w-[60rem]">{banner_text[0].info}</p>
        </div>

        <h1 className=" md:text-3xl text-2xl mx-6 mt-[8rem] mb-8">{banner_text[1].Header}</h1>
        <div className=" bg-[#98cfb1] md:p-[8rem] p-[2rem] mx-6 rounded-xl mb-[8rem]">
          <p className=" md:text-xl text-s ">{banner_text[1].info}</p>
        </div>
      </div>
    </>
  );
}

export default AboutBanner;
