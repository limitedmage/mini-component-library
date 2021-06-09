import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const sizeStyles = {
    small: {
      "--font-size": `${14 / 16}rem`,
      "--border-width": 1 + "px",
      "--padding": 4 + "px",
    },
    large: {
      "--font-size": `${18 / 16}rem`,
      "--border-width": 2 + "px",
      "--padding": 6 + "px",
    },
  };

  return (
    <Wrapper
      style={{
        "--width": width + "px",
        ...sizeStyles[size],
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon id={icon} size={size === "small" ? 12 : 20} strokeWidth={2} />
      <Input placeholder={placeholder} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  border-bottom: var(--border-width) solid ${COLORS.black};
  width: var(--width);
  color: ${COLORS.gray700};
  padding-bottom: var(--padding);
  padding-top: var(--padding);

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
`;

const Input = styled.input`
  border: none;
  flex-grow: 1;
  margin-left: 8px;
  font-weight: 700;
  color: ${COLORS.gray700};
  font-size: var(--font-size);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }

  &:focus {
    outline: none;
  }

  ${Wrapper}:hover > & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
