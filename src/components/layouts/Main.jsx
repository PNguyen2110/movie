import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../molecules";
import styled from "styled-components";
export const Main = () => {
  return (
    <Container className="Main">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};
export default Main;
const Container = styled.div`
  &.Main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    .Header {
    }
    .main-content {
      flex: 1;
    }
    .Footer {
    }
  }
`;
