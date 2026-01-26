import { useEffect, useState } from "react";

export default function useRotatingText(texts, delay = 2500) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, delay);

    return () => clearInterval(interval);
  }, [texts, delay]);

  return texts[index];
}
