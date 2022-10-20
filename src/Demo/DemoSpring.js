import React from "react";
import { useSpring, animated } from "react-spring";
export default function DemoSpring() {
  const props = useSpring({
    color: [255, 255, 99, 1],

    from: {
      color: [122, 122, 22, 0.2],
      //   transition: "all .5s",
    },
    config: { duration: 2000 },
  });

  const propAni = useSpring({
    from: { fontSize: "10px" },
    to: async (next) => {
      await next({ fontSize: "15px" });
      await next({ fontSize: "30px" });
      await next({ fontSize: "5px" });
    },
    config: { duration: 2000 },
  });
  return (
    <div>
      <animated.div
        style={{
          color: props.color.interpolate((r, g, b) => {
            return `rgb(${r},${g},${b})`;
          }),
        }}
      >
        DemoSpring
      </animated.div>
      <animated.div style={propAni}>
        <span>hello world</span>
        <p>cyber</p>
      </animated.div>
    </div>
  );
}
