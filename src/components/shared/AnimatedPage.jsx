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
        className={`transition-all duration-700 ease-in-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-72'
        }`}
      >
        {children}
      </div>
  )
}
