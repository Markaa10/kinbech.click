import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import SidebarContainer from "containers/sidebar";

import Navbar from "components/navbar";
import BannerCard from "components/cards/banner";

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
        return (
          <>
            <BannerCard />
          </>
        );

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
