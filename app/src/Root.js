import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Switch from "./components/Switch";
import OptionToggle from "./components/OptionToggle";
import Slider from "./components/Slider";

const Wrapper = styled.div`
  background: #ffffff;
  height: 100%;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  justify-content: center;
  grid-template-rows: repeat(4, 1fr);
`;

const Heading = styled.h2``;

const Root = () => {
  const [state, setState] = useState(false);
  const [option, setOption] = useState("normal");
  const [frequency, setFrequency] = useState(500);
  const toggleState = () => setState(!state);
  const toggleOption = () =>
    setOption(option === "normal" ? "strobe" : "normal");

  useEffect(() => {
    if (!state)
      fetch(`http://192.168.1.231:1234/led/11/off`).then(() => setState(false));
    if (state && option === "normal")
      fetch(`http://192.168.1.231:1234/led/11/on`).then(() => setState(true));
  }, [state, option]);

  useEffect(() => {
    if (state && option === "strobe")
      fetch(`http://192.168.1.231:1234/led/11/strobe/${frequency}`);
  }, [state, option, frequency]);

  return (
    <Wrapper>
      <Heading>Christmas lights</Heading>
      <Switch state={state} toggleState={toggleState} />
      {option === "strobe" && (
        <Slider frequency={frequency} setFrequency={setFrequency} />
      )}
      <OptionToggle option={option} toggleOption={toggleOption} />
    </Wrapper>
  );
};

export default Root;
