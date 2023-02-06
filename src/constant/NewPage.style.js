import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  padding: 100px 32px;
`;

export const Form = styled.div``;

export const SubForm = styled.div``;

export const SubmitButton = styled.button`
  width: 100px;
  height: 40px;
  align-self: flex-end;
  margin-top: 20px;
  border-radius: 100px;
  border-color: transparent;
  background-color: gray;
  color: pink;

  &:hover {
    background-color: #747474;
  }
`;

export const InputBox = styled.input`
  display: flex;
  width: 300px;
  height: 50px;
  background-color: #eaeaea;
  border-radius: 20px;
  border-color: transparent;
`;

export const TitleInputBox = styled.input`
  display: flex;

  width: 700px;
  height: 100px;
  background-color: #eaeaea;
  border-radius: 20px;
  border-color: transparent;
`;

export const DescriptionInputBox = styled.input`
  display: flex;
  width: 700px;
  height: 500px;
  background-color: #eaeaea;
  border-radius: 20px;
  border-color: transparent;
`;

export const Category = styled.div`
  display: flex;
  color: gray;
`;

export const Date = styled.div`
  display: flex;
  color: gray;
`;

export const Member = styled.div`
  display: flex;
  color: gray;
`;

export const Age = styled.div`
  display: flex;
  color: gray;
`;

export const PhoneNumber = styled.div`
  display: flex;
  color: gray;
`;

export const Title = styled.div`
  display: flex;
  color: gray;
`;

export const Description = styled.div`
  display: flex;
  color: gray;
`;
