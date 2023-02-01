import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1300px;
  background-color: lightgray;
`;

export const CardSection = styled.div`
  display: flex;
  background-color: yellow;
  padding-bottom: 30px;
  width: 1300px;
`;

export const CardContainer = styled.div`
  margin-top: 20px;
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  background-color: skyblue;
  margin-top: 100px;
  gap: 20px;
  justify-content: flex-start;
  padding-left: 32px;
  padding-right: 32px;
  width: 1200px;
`;

export const Card = styled.div`
  display: flex;
  background-color: grey;
  /* max-width: 30px; */
  border-radius: 10px;
  min-width: 350px;
  min-height: 500px;
  flex-direction: column;
`;

export const CardTitle = styled.div`
  color: pink;
  font-size: 40px;
  margin-top: 10px;
`;

export const CardSubtitle = styled.div`
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
