import { jeepImage, user } from "assets/images";
import Flex from "components/flex";
import { Body1, Body3, Title3, Title5, Title6 } from "components/texts";
import React from "react";
import styled from "styled-components";
import { StarIcon } from "meistericons";
import tw from "twin.macro";
import { colors } from "theme";
import { BalanceScaleIcon, TrashIcon } from "assets/icons";

const Container = styled(Flex)`
  ${tw`py-9 px-11 flex-col`};
  gap: 1.4375rem;
  width: 80%;
  margin: 2.93rem auto;

  background: #ffffff;
  border-radius: 20px;
  height: 100vh;
  overflow-y: scroll;
`;

function CartContainer() {
  const items = [
    {
      id: 1,
      img: jeepImage,
      title: "Huwawei V12 pro",
      rating: 5,
      price: 12000,
      status: "Active",
      postedon: "2021/02/21",
      expiry: "2021/04/1",
    },
    {
      id: 2,
      img: jeepImage,
      title: "Huwawei V12 pro",
      rating: 5,
      price: 12000,
      status: "Active",
      postedon: "2021/02/21",
      expiry: "2021/04/1",
    },
    {
      id: 3,
      img: jeepImage,
      title: "Huwawei V12 pro",
      rating: 5,
      price: 12000,
      status: "Active",
      postedon: "2021/02/21",
      expiry: "2021/04/1",
    },
    {
      id: 4,
      img: jeepImage,
      title: "Huwawei V12 pro",
      rating: 2,
      price: 12000,
      status: "Active",
      postedon: "2021/02/21",
      expiry: "2021/04/1",
    },
    {
      id: 5,
      img: jeepImage,
      title: "Huwawei V12 pro",
      rating: 3,
      price: 12000,
      status: "Active",
      postedon: "2021/02/21",
      expiry: "2021/04/1",
    },
    {
      id: 6,
      img: jeepImage,
      title: "Huwawei V12 pro",
      rating: 4,
      price: 12000,
      status: "Active",
      postedon: "2021/02/21",
      expiry: "2021/04/1",
    },
  ];

  return (
    <Container>
      {items.map((item) => (
        <Flex
          alignItems="flex-end"
          width="100%"
          justifyContent="space-between"
          style={{
            paddingBottom: "1.187rem",
            borderBottom: "2px solid #5B5B5B",
          }}
        >
          <Flex gap={2.25}>
            <img
              src={item.img}
              alt=""
              width={200}
              height={180}
              style={{ objectFit: "cover" }}
            />
            <Flex direction="column" gap={0.375}>
              <Title5>{item.title}</Title5>
              <Flex>{Array(item.rating).fill(<StarIcon />)}</Flex>
              <Title3 color={colors.text}>Rs.{item.price} </Title3>
              <Body1 color="#4CC77D">{item.status}</Body1>
              <Flex marginTop={0.93} gap={0.9}>
                <TrashIcon />
                <BalanceScaleIcon />
              </Flex>
            </Flex>
          </Flex>

          <Flex gap={2.1875}>
            <Body1 color={colors.text}>Posted on: {item.postedon}</Body1>
            <Body1 color={colors.text}>Expiry on: {item.expiry}</Body1>
          </Flex>
        </Flex>
      ))}
    </Container>
  );
}

export default CartContainer;
