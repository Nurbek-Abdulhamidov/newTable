import React, { useContext } from "react";
import { ContextInfo } from "../Context";

import { Button, Cards, Container, Img, Title } from "./style";

const Card = () => {
  const [mock, setMock] = useContext(ContextInfo);
  console.log(mock);

  const getDelete = (id) => {
    const newMock = mock.filter((value) => value.id !== id);
    setMock(newMock);
  };

  return (
    <Container>
      {mock.map((value, index) => {
        return (
          <Cards>
            <Img src={value.url} />
            <Title>{value.name}</Title>
            <Button onClick={() => getDelete(value.id)}>delete</Button>
          </Cards>
        );
      })}
    </Container>
  );
};

export default Card;
