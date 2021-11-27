import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import SidebarContainer from "containers/sidebar";
import SalesmanDashboardContainer from "containers/salesman/dashboard";

import Navbar from "components/navbar";
import BannerCard from "components/cards/banner";
import IconCard from "components/cards/Icon";

const Container = styled.div`
  ${tw`
    flex
    items-start
    w-full
  `}
`;

const ViewContainer = styled.div`
  ${tw`w-full`}
`;

function SalesmanDashboardPage() {
  const [view, setView] = useState<string>("Home");

  const getView = () => {
    switch (view) {
      case "Home":
        return <SalesmanDashboardContainer />;

      default:
        return <h1>Default</h1>;
    }
  };

  return (
    <Container>
      <SidebarContainer setView={setView} />
      <div style={{ maxWidth: "100%", width: "94.6%" }}>
        <Navbar />
        {getView()}
      </div>
    </Container>
  );
}

export default SalesmanDashboardPage;
