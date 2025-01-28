import { useEffect, useState } from "react";

export const AnimatedPage = ({children}) => {
  
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        return () => {
            setVisible(false);
        }
    }, [])
  
    return (
        <div
        className={`transition-opacity duration-1000 ease-in-out transform ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
        }`}
      >
        {children}
      </div>
  )
}
