import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CommentCard from "components/cards/comment";
import { Body1 } from "components/texts";

const Container = styled.div`
  margin: 0 4.17%;
  ${tw`py-5 px-8 my-12 rounded-2xl`};
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background: #fff;
`;

function CommentsContainer() {
  return <Container>{Array(5).fill(<CommentCard />)}</Container>;
}

export default CommentsContainer;
