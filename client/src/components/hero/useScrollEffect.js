import { useEffect, useState } from "react";

export function useScrollEffect() {
  const [backgroundZoom, setBackgroundZoom] = useState(0);
  const [textOpacity, setTextOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newBackgroundZoom = scrollY * 0.04;
      const newTextOpacity = 1 - scrollY * 0.005;

      setBackgroundZoom(newBackgroundZoom);
      setTextOpacity(newTextOpacity < 0 ? 0 : newTextOpacity); // Ensure opacity is not less than 0
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { backgroundZoom, textOpacity };
}
