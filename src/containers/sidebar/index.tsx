import React, { useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "theme";
import tw from "twin.macro";
import {
  AddressCardIcon,
  CartIcon,
  CloneIcon,
  CogIcon,
  CommentsIcon,
  HomeIcon,
  MobileIcon,
  UserIcon,
} from "assets/icons";

const Container = styled.nav`
  ${tw`
    
    bg-primary
    max-h-screen
    min-h-screen
  `}
`;

const LinksContainer = styled.ul`
  list-style: none;
  ${tw`
    flex
    flex-col
    items-center
    px-5
   `}
`;

const Link = styled.li`
  ${tw`
    
  flex items-center justify-center mb-9 p-3.5
  `}
  cursor:pointer;

  ${({ active }: any) =>
    active &&
    css`
      background: #fff;
      ${tw`rounded-xl`}
    `}
` as any;

type ISidebarContainerProps = { setView: any };
function SidebarContainer(props: ISidebarContainerProps) {
  const { setView } = props;

  const [activeLink, setActiveLink] = useState<string>("Home");

  const links = [
    {
      id: 1,
      icon: (
        <HomeIcon
          style={{ color: activeLink === "Home" ? colors.primary : "#fff" }}
        />
      ),
      title: "Home",
    },
    {
      id: 2,
      icon: (
        <CartIcon
          style={{ color: activeLink === "Cart" ? colors.primary : "#fff" }}
        />
      ),
      title: "Cart",
    },
    {
      id: 3,
      icon: (
        <CloneIcon
          style={{ color: activeLink === "Clone" ? colors.primary : "#fff" }}
        />
      ),
      title: "Clone",
    },
    {
      id: 4,
      icon: (
        <AddressCardIcon
          style={{
            color: activeLink === "AddressCard" ? colors.primary : "#fff",
          }}
        />
      ),
      title: "AddressCard",
    },
    {
      id: 5,
      icon: (
        <MobileIcon
          style={{ color: activeLink === "Mobile" ? colors.primary : "#fff" }}
        />
      ),
      title: "Mobile",
    },
    {
      id: 5,
      icon: (
        <UserIcon
          style={{ color: activeLink === "User" ? colors.primary : "#fff" }}
        />
      ),
      title: "User",
    },
    {
      id: 5,
      icon: (
        <CommentsIcon
          style={{ color: activeLink === "Comments" ? colors.primary : "#fff" }}
        />
      ),
      title: "Comments",
    },
    {
      id: 5,
      icon: (
        <CogIcon
          style={{ color: activeLink === "Cog" ? colors.primary : "#fff" }}
        />
      ),
      title: "Cog",
    },
  ];

  return (
    <Container>
      <LinksContainer>
        {links.map((item) =>
          activeLink === item.title ? (
            <Link
              key={item.id}
              active
              onClick={() => {
                setActiveLink(item.title);
                setView(item.title);
              }}
            >
              {item.icon}
            </Link>
          ) : (
            <Link
              key={item.id}
              onClick={() => {
                setActiveLink(item.title);
                setView(item.title);
              }}
            >
              {item.icon}
            </Link>
          )
        )}
      </LinksContainer>
    </Container>
  );
}

export default SidebarContainer;
