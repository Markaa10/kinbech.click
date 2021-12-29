import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import SidebarContainer from "containers/sidebar";
import SalesmanDashboardContainer from "containers/salesman/dashboard";
import PostAdContainer from "containers/salesman/postad";
import MyAdsContainer from "containers/salesman/myads";

import Navbar from "components/navbar";
import Footer from "components/footer";

const Container = styled.div`
  ${tw`
    flex
    items-start
    w-full
  `}
`;

function SalesmanDashboardPage() {
  const [view, setView] = useState<string>("Home");

  const getView = () => {
    switch (view) {
      case "Home":
        return <SalesmanDashboardContainer />;

      case "Cart":
        return <PostAdContainer />;

      case "Clone":
        return <MyAdsContainer />;

      default:
        return <h1>Default</h1>;
    }
  };

  return (
    <Container>
      <SidebarContainer setView={setView} />
      <div
        style={{
          width: "100%",
          maxHeight: "100vh",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      >
        <Navbar view={view} />
        {getView()}
        <Footer />
      </div>
    </Container>
  );
}

export default SalesmanDashboardPage;
