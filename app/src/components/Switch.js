import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Circle = styled(motion.div)`
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: bold;
  font-size: 2rem;
`;

const Switch = ({ state, toggleState }) => {
  const circleVariants = {
    ON: {
      backgroundColor: "#E1E5F2",
    },
    OFF: {
      backgroundColor: "#022b3a",
    },
  };
  const paragraphVariants = {
    ON: {
      color: "#022b3a",
    },
    OFF: {
      color: "#E1E5F2",
    },
  };
  return (
    <Circle
      initial={state ? "ON" : "OFF"}
      animate={state ? "ON" : "OFF"}
      variants={circleVariants}
      onClick={toggleState}
    >
      <motion.p
        initial={state ? "ON" : "OFF"}
        animate={state ? "ON" : "OFF"}
        variants={paragraphVariants}
      >
        {state ? "ON" : "OFF"}
      </motion.p>
    </Circle>
  );
};

export default Switch;
