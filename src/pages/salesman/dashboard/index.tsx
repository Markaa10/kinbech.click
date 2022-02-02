import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import SidebarContainer from "containers/sidebar";
import SalesmanDashboardContainer from "containers/salesman/dashboard";
import PostAdContainer from "containers/salesman/postad";
import MyAdsContainer from "containers/salesman/myads";
import CartContainer from "containers/salesman/cart";
import MobileverificationContainer from "containers/salesman/mobileverification";
import CommentsContainer from "containers/salesman/comments";
import ChangeInformationContainer from "containers/salesman/changeinformation";
import ChangePasswordContainer from "containers/salesman/changepassword";

import Navbar from "components/navbar";
import Footer from "components/footer";
import Flex from "components/flex";

const Container = styled(Flex)``;

function SalesmanDashboardPage() {
  const [view, setView] = useState<string>("Dashboard");

  const getView = () => {
    switch (view) {
      case "Dashboard":
        return <SalesmanDashboardContainer />;

      case "Postad":
        return <PostAdContainer />;

      case "Myads":
        return <MyAdsContainer />;

      case "Cart":
        return <CartContainer />;

      case "MobileVerification":
        return <MobileverificationContainer />;

      case "Comments":
        return <CommentsContainer />;

      case "Changeinformation":
        return <ChangeInformationContainer />;

      case "Changepassword":
        return <ChangePasswordContainer />;

      default:
        return <h1>Default</h1>;
    }
  };

  return (
    <Container>
      <SidebarContainer setView={setView} />
      <div
        style={{ marginLeft: "5.5rem", background: "#E5E5E5", width: "100%" }}
      >
        <Navbar view={view} />
        {getView()}
        <Footer />
      </div>
    </Container>
  );
}

export default SalesmanDashboardPage;
