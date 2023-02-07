import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: lightgray;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 32px;
`;

export const Form = styled.div`
  display: flex;
  max-width: 700px;
  flex-wrap: wrap; ;
`;

export const SubForm = styled.div`
  display: flex;
  flex-direction: column;
  &:nth-child(2n + 1) {
    margin-right: 85px;
  }
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 20px;
  border-radius: 100px;
  border-color: transparent;
  background-color: gray;
  color: #eaeaea;
  font-size: large;

  &:hover {
    background-color: #747474;
  }
`;

export const InputBoxProfile = styled.input`
  display: flex;
  width: 300px;
  height: 300px;
  background-color: #eaeaea;
  border-radius: 100%;
  border-color: transparent;
  margin-top: 8px;
  margin-bottom: 20px;
`;

export const InputBox = styled.input`
  display: flex;
  width: 300px;
  height: 50px;
  background-color: #eaeaea;
  border-radius: 20px;
  border-color: transparent;
  margin-top: 8px;
  margin-bottom: 15px;
`;

export const DescriptionInputBox = styled.input`
  display: flex;
  width: 700px;
  height: 500px;
  background-color: #eaeaea;
  border-radius: 20px;
  border-color: transparent;
  margin-top: 8px;
  margin-bottom: 15px;
`;

export const InputBoxTitle = styled.div`
  display: flex;
  color: gray;
`;

export const Description = styled.div`
  display: flex;
  color: gray;
`;
