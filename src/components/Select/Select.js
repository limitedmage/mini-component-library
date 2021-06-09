import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>

      <VisibleSelect>
        <CurrentItem>{displayedValue}</CurrentItem>
        <Icon id="chevron-down" strokeWidth={2} size={20} />
      </VisibleSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const VisibleSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  border: 1px solid transparent;
  color: ${COLORS.gray700};
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  align-items: center;

  ${NativeSelect}:hover + & {
    color: black;
  }

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const CurrentItem = styled.span`
  margin-right: 24px;
`;

export default Select;
