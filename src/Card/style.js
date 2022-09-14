import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

export const Cards = styled.div`
  width: 400px;
  height: 500px;
  background-color: white;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 50%;
`;

export const Title = styled.div`
  font-size: 20px;
`;

export const Button = styled.button`
  width: 200px;
  height: 40px;
  background-color: red;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 20px;
`;
