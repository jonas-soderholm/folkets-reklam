import React, { useEffect } from "react";

function Hero() {
  // Add background and scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get the vertical scroll position
      const backgroundSize = `calc(100% + ${scrollY * 0.2}px)`;
      document.body.style.backgroundSize = backgroundSize;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollY = window.scrollY;

    const backgroundSize = `calc(100% + ${scrollY}px)`;

    document.body.style.backgroundImage = 'url("./heroPhone.webp")';
    document.body.style.backgroundSize = backgroundSize;
    document.body.style.backgroundPositionY = "-60px";
  }, []);

  // Main page content
  return (
    <div className="Content bg-slate-200 rounded-2xl p-3 pt-4 translate-y-[25rem]">
      <a href="" className="lol ">
        contentcontentcon tentconten tcontentconten tconten tcontentcont entcontentcont entcontentcontent
        contentcontentcon tentconten tcontentconten tconten tcontentcont entcontentcont entcontentcontent
        contentcontentcon tentconten tcontentconten tconten tcontentcont entcontentcont entcontentcontent
        contentcontentcon tentconten tcontentconten tconten tcontentcont entcontentcont entcontentcontent
        contentcontentcon tentconten tcontentconten tconten tcontentcont entcontentcont entcontentcontent
        contentcontentcon tentconten tcontentconten tconten tcontentcont entcontentcont entcontentcontent
        contentcontentcon tentconten tcontentconten tconten tcontentcont entcontentcont entcontentcontent
        contentcontentcon tentconten tcontentconten tconten tcontentcont entcontentcont entcontentcontent
        contentcontentcon tentconten tcontentconten tconten tcontentcont entcontentcont entcontent content
        contentcontentcon tentconten tcontentconten tconten tcontentcont entcontentcont entcontentcontent
        contentcontentcon tentconten tcontentconten tconten tcontentcont entcontentcont entcontentcontent
        contentcontentcon tentconten tcontentconten tconten tcontentcont entcontentcont entcontentcontent
        contentcontentcon tentconten tcontentconten tconten tcontentcont entcontentcont entcontentcontent
        contentcontentcon tentconten tcontentconten tconten tcontentcont entcontentcont entcontentcontent
        contentcontentcon tentconten tcontentconten tconten tcontentcont entcontentcont entcontentcontent
        contentcontentcon tentconten tcontentconten tconten tcontentcont entcontentcont entcontentcontent
        contentcontentcon tentconten tcontentconten tconten tcontentcont entcontentcont entcontentcontent
      </a>
    </div>
  );
}

export default Hero;
