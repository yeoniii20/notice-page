import styled from "styled-components";

export const Wrapper = styled.div``;

export const CardSection = styled.div`
  display: flex;
  background-color: lightgray;
  padding-bottom: 30px;
  padding: 0px 32px;
  flex-wrap: wrap;
  column-gap: 20px;
`;

export const CardContainer = styled.div`
  margin-top: 20px;
  /* display: flex; */
  /* justify-content: center; */
  margin-top: 100px;
  /* justify-content: flex-start; */
`;

export const Card = styled.div`
  display: flex;
  background-color: grey;
  border-radius: 180px;
  width: 400px;
  height: 500px;
  flex-direction: column;
`;

export const CardTitle = styled.div`
  color: #eaeaea;
  font-size: 40px;
  margin-top: 10px;
`;

export const CardSubtitle = styled.div`
  color: #eaeaea;
  font-size: 30px;
  margin-top: 10px;
`;

export const CardDescription = styled.div`
  color: #eaeaea;
  font-size: 18px;
  margin-top: 70px;
  padding-left: 5px;
  padding-right: 5px;
  text-align: center;
  height: 180px;
`;

export const View = styled.div`
  color: #eaeaea;
`;

export const CardButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border-color: transparent;
  background-color: #eaeaea;
  align-items: flex-end;
  margin-top: 30px;
  align-self: center;
  color: grey;

  &:hover {
    background-color: lightpink;
  }
`;
