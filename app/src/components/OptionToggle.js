import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  grid-row: 4;
  position: relative;
  display: flex;
  height: 2.25rem;
  width: 12rem;
  margin: 0;
  padding: 0;
  border-radius: 1.125rem;
  border: solid #022b3a 0.125rem;
  background: #e1e5f2;
  font-size: 1rem;
  align-items: center;
  font-weight: bold;
`;

const Paragraph = styled(motion.p)`
  position: relative;
  margin: 0;
  padding: 0;
  width: 50%;
  text-align: center;
  z-index: 2;
`;

const Option = styled(motion.div)`
  position: absolute;
  top: -0.0625rem;
  z-index: 1;
  height: 2.25rem;
  width: 6rem;
  border-radius: 1.125rem;
  background: #022b3a;
`;

const OptionToggle = ({ option, toggleOption }) => {
  const blockVariants = {
    normal: {
      left: 0,
    },
    strobe: {
      left: "50%",
    },
  };

  const paragraphVariants = {
    active: {
      color: "#e1e5f2",
    },
    inactive: {
      color: "#022b3a",
    },
  };

  return (
    <Wrapper onClick={toggleOption}>
      <Paragraph
        initial={option === "normal" ? "active" : "inactive"}
        animate={option === "normal" ? "active" : "inactive"}
        variants={paragraphVariants}
      >
        normal
      </Paragraph>
      <Paragraph
        initial={option === "strobe" ? "active" : "inactive"}
        animate={option === "strobe" ? "active" : "inactive"}
        variants={paragraphVariants}
      >
        strobe
      </Paragraph>
      <Option initial={option} animate={option} variants={blockVariants} />
    </Wrapper>
  );
};

export default OptionToggle;
