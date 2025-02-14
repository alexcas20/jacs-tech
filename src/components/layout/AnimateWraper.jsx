import { useEffect, useState } from "react";

export const AnimateWraper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  });
  return (
    <article
      className={`transition-all transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } duration-700 ease-out`}
    >
      {children}
    </article>
  );
};
