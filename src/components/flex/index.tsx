import React from "react";
import styled from "styled-components";

interface IFlexProps {
  style?: any;
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
}

type IContainerProps = {
  direction: string;
  alignItems: string;
  justifyContent: string;
  width: string;
  marginTop: number;
  marginBottom: number;
};

const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: ${(p) => p.direction};
  align-items: ${(p) => p.alignItems};
  justify-content: ${(p) => p.justifyContent};
  width: ${(p) => p.width};
  margin-top: ${(p) => p.marginTop}px;
  margin-bottom: ${(p) => p.marginBottom}px;
`;

const Flex = (props: IFlexProps) => {
  const {
    children,
    direction = "row",
    alignItems = "center",
    justifyContent = "space-between",
    style,
    width = "100%",
    marginTop = 0,
    marginBottom = 0,
  } = props;

  return (
    <Container
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
