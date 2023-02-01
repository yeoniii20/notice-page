import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  margin-top: 200px;
  margin-bottom: 300px;
`;

export const Title = styled.h1`
  background-color: grey;
  color: pink;
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
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
  margin-top: 70px;
  padding-left: 5px;
  padding-right: 5px;
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
