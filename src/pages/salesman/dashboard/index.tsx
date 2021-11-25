import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import SidebarContainer from "containers/sidebar";

import Navbar from "components/navbar";

const Container = styled.div`
  ${tw`
    flex
    items-start
    
  `}
`;

function SalesmanDashboardPage() {
  const [view, setView] = useState<string>("Home");

  const getView = () => {
    switch (view) {
      case "Home":
        return <Navbar />;

      default:
        return <Navbar />;
    }
  };

  return (
    <Container>
      <SidebarContainer setView={setView} />
      {getView()}
    </Container>
  );
}

export default SalesmanDashboardPage;
