import React, { useContext } from "react";
import { ContextInfo } from "../Context";
import { Container, Item, NavItems, Title } from "./style";

const Navbar = () => {
  const [mock] = useContext(ContextInfo);
  return (
    <Container>
      <Title>Nurbek</Title>
      <NavItems>
        <Item rang="qizil">Home</Item>
        <Item>Contact</Item>
        <Item>Movies</Item> 
        <Item>Discount</Item>
        <Item rang="sariq">{mock.length}</Item>
      </NavItems>
    </Container>
  );
};

export default Navbar;
