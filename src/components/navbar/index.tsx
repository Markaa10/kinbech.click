import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { CaptionText, Title2, Title3, Title5 } from "components/texts";
import StandardInput from "components/input/standard";
import { BellIcon, EnvelopeIcon, SearchIcon } from "assets/icons";
import { user } from "assets/images";
import { colors } from "theme";

const Container = styled.nav`
  ${tw`flex w-full  items-center   justify-between    
  px-5     
  py-3.5      
  `}

  background: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
`;

const IconContainer = styled.span`
  position: relative;
  margin: 0 22px;
  cursor: pointer;
`;

const Count = styled(CaptionText)`
  ${tw`flex items-center justify-center`}
  position: absolute;
  top: -6px;
  right: -2px;
  background: red;
  padding: 2px;
  color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

const ActionsContainer = styled.div`
  ${tw`flex items-center justify-between `}
`;

const Avatar = styled.img`
  width: 64px;
  height: auto;
  border-radius: 50%;
  cursor: pointer;
`;

type INavbarProps = { view: string };
function Navbar(props: INavbarProps) {
  const { view } = props;

  const getView = () => {
    switch (view) {
      case "Home":
        return "DASHBOARD";

      case "Postad":
        return "POST AD";

      case "Myads":
        return "MY ADS";

      case "Cart":
        return "CART";

      case "MobileVerification":
        return "MOBILE VERIFICATION";

      case "Comments":
        return "COMMENTS";

      case "Changeinformation":
        return "CHANGE INFORMATION";
        
      case "Changepassword":
        return "CHANGE PASSWORD";

      default:
        return "DASHBOARD";
    }
  };

  return (
    <Container>
      <Title5 color={colors.primary}>{getView()}</Title5>

      <ActionsContainer>
        <StandardInput placeholder="Search" icon={<SearchIcon />} />
        <IconContainer>
          <EnvelopeIcon />
          <Count>3</Count>
        </IconContainer>
        <IconContainer>
          <BellIcon />
        </IconContainer>

        <Avatar src={user} alt="user" />
      </ActionsContainer>
    </Container>
  );
}

export default Navbar;
