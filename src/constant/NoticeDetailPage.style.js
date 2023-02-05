import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: lightgray;
  padding-top: 200px;
  padding-bottom: 100px;
  /* flex-direction: column; */
  /* max-width: 1920px; */
`;

export const Title = styled.h1`
  background-color: grey;
  color: pink;
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  justify-content: flex-start;
  padding-left: 32px;
  padding-right: 32px;
`;

export const Card = styled.div`
  display: flex;
  background-color: grey;
  border-radius: 10px;
  max-width: 800px;
  height: 500px;
  flex-direction: column;
`;

export const CardTitle = styled.h1`
  color: pink;
  font-size: 40px;
  margin-top: 10px;
`;

export const CardSubtitle = styled.h2`
  color: pink;
  font-size: 30px;
  margin-top: 10px;
`;

export const CardDescription = styled.div`
  color: pink;
  font-size: 18px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
`;

export const CardButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border-color: transparent;
  background-color: pink;
  justify-content: flex-end;
  margin-top: 30px;
  align-self: center;
  color: grey;

  &:hover {
    background-color: lightpink;
  }
`;
