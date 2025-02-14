
import { useInView } from "react-intersection-observer";
export const ScrollRevealEffect = ({ children }) => {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

 
  return (
    <div
    style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(100px)",
        transition: "all .4s ease-in-out",
      }}
      ref={ref}>
      {children}
    </div>
  );
};
