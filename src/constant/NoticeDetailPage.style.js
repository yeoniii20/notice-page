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
  color: #eaeaea;
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
  color: #eaeaea;
  font-size: 40px;
  margin-top: 10px;
`;

export const CardSubtitle = styled.h2`
  color: #eaeaea;
  font-size: 30px;
  margin-top: 10px;
`;

export const CardDescription = styled.div`
  color: #eaeaea;
  font-size: 18px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
`;
