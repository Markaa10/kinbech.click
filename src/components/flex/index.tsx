import React from "react";
import styled from "styled-components";

interface IFlexProps {
  style?: any;
  display?: "flex" | "inline-flex";
  direction?: "row" | "column";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  justifyContent?:
    | "flex-start"
    | "space-evenly"
    | "space-between"
    | "space-around"
    | "flex-end"
    | "center";
  width?: string;
  children: JSX.Element | JSX.Element[];
  marginTop?: number;
  marginBottom?: number;
  gap?: number;
}

type IContainerProps = {
  display: string;
  direction: string;
  alignItems: string;
  justifyContent: string;
  width: string;
  marginTop: number;
  marginBottom: number;
  gap: number;
};

const Container = styled.div<IContainerProps>`
  display: ${(p) => p.display};
  flex-direction: ${(p) => p.direction};
  align-items: ${(p) => p.alignItems};
  justify-content: ${(p) => p.justifyContent};
  width: ${(p) => p.width};
  margin-top: ${(p) => p.marginTop}rem;
  margin-bottom: ${(p) => p.marginBottom}rem;
  gap: ${(p) => p.gap}rem;
`;

const Flex = (props: IFlexProps) => {
  const {
    children,
    display = "inline-flex",
    direction = "row",
    alignItems = "flex-start",
    justifyContent = "flex-start",
    style,
    width = "100%",
    marginTop = 0,
    marginBottom = 0,
    gap = 0,
  } = props;

  return (
    <Container
      display={display}
      gap={gap}
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      width={width}
      marginTop={marginTop}
      marginBottom={marginBottom}
      style={style}
    >
      {children}
    </Container>
  );
};

export default Flex;
