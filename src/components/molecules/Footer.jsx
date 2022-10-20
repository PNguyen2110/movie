import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return <Container className="Footer">Footer</Container>;
};
export default Footer;

const Container = styled.footer`
  &.Footer {
    padding: 35px;
    background-color: blue;
    color: white;
    text-align: center;
    font-size: 25px;
  }
`;
