import { useEffect, useState } from "react";

export function useScrollEffect() {
  const [backgroundZoom, setBackgroundZoom] = useState(100);
  const [textZoom, setTextZoom] = useState(30);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newBackgroundZoom = 100 + scrollY * 0.05;
      const newTextZoom = 30 + scrollY * 0.03;

      setBackgroundZoom(newBackgroundZoom);
      setTextZoom(newTextZoom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { backgroundZoom, textZoom };
}
