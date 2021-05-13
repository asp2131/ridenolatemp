import React, { useRef, useState, useEffect, useCallback } from "react";
import { useTransition, animated, config } from "react-spring";

export default function Logo() {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#28d79f" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#c23369" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#28b4d7" },
  });

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(["Drive With Us"]), 2000));
    ref.current.push(setTimeout(() => set(["Or Be A Passenger"]), 5000));
    ref.current.push(setTimeout(() => set(["Ride App"]), 8000));
  }, []);

  useEffect(() => void reset(), []);

  return (
    <div>
    <div style={{justifyContent: 'center', display: '-webkit-flex', flexDirection: 'unset'}}>
       {transitions((style, item) => (
        <animated.div
          style={style}>
          {item}
        </animated.div>
      ))}
    </div>
     <div
     style={{justifyContent: 'center', display: '-webkit-flex', flexDirection: 'unset', height:100, margin: 'auto'}}
     >
        <img 
            src={'/ride-logo.png'}
            
         />
     </div>
     </div>
  );
}
