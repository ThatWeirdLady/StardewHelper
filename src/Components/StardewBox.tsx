import styled from "@emotion/styled";
import React, { ReactNode } from "react";

const OuterDiv = styled("div")({
  borderRadius: "8px",
  border: "solid #5b2b2a 2px",
});

const MiddleDiv = styled("div")({
  borderRadius: "6.5px",
  border: "solid #fa9305 2px",
});

const InnerDiv = styled("div")({
  backgroundImage: "linear-gradient(#ffcb7b, #eba867)",
  boxShadow: "inset 0 0 1px 2px #c47a48",
  borderRadius: "5px",
  border: "solid #853605 1.5px",
});

interface IProps {
  children: ReactNode;
}

export const StardewBox = (props: IProps) => {
  return (
    <OuterDiv>
      <MiddleDiv>
        <InnerDiv>{props.children}</InnerDiv>
      </MiddleDiv>
    </OuterDiv>
  );
};
