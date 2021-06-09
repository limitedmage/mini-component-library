/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const sizes = {
    small: {
      "--height": "8px",
      "--border-radius": "4px",
      "--inner-padding": 0,
    },
    medium: {
      "--height": "12px",
      "--border-radius": "4px",
      "--inner-padding": 0,
    },
    large: {
      "--height": "16px",
      "--border-radius": "8px",
      "--inner-padding": "4px",
    },
  };

  const styles = sizes[size];
  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      style={styles}
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
    >
      <OverflowWrapper>
        <Value value={value} />
      </OverflowWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--inner-padding);
`;

const OverflowWrapper = styled.div`
  border-radius: 4px;

  /* Trim off corners of progress bar */
  overflow: hidden;
`;

const Value = styled.div`
  height: var(--height);
  background-color: ${COLORS.primary};
  width: ${(p) => p.value}%;
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
