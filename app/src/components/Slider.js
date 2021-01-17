import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin: 1rem 0;
  width: 15rem;
`;

const InputLabel = styled.label`
  display: block;
  margin: 0.25rem 0;
`;

const Input = styled.input`
  width: 100%;
`;

const Slider = ({ frequency, setFrequency }) => {
  const handleInputChange = (e) => {
    setFrequency(e.target.value);
  };
  return (
    <InputWrapper>
      <InputLabel htmlFor="scale">frequency</InputLabel>
      <Input
        type="range"
        name="scale"
        min="10"
        max="1000"
        step="5"
        value={frequency}
        onChange={handleInputChange}
      />
    </InputWrapper>
  );
};

export default Slider;
