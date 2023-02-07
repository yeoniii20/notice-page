import * as S from "./TeacherRegistration.styled";
import { Link } from "react-router-dom";

const TeacherRegistration = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.SubForm>
          <S.InputBoxTitle>Profile</S.InputBoxTitle>
          <S.InputBoxProfile></S.InputBoxProfile>
        </S.SubForm>
        <S.Form>
          <S.SubForm>
            <S.InputBoxTitle>Category</S.InputBoxTitle>
            <S.InputBox></S.InputBox>
          </S.SubForm>
          <S.SubForm>
            <S.InputBoxTitle>Age</S.InputBoxTitle>
            <S.InputBox></S.InputBox>
          </S.SubForm>
          <S.SubForm>
            <S.InputBoxTitle>Gender</S.InputBoxTitle>
            <S.InputBox></S.InputBox>
          </S.SubForm>
          <S.SubForm>
            <S.InputBoxTitle>PhoneNumber</S.InputBoxTitle>
            <S.InputBox></S.InputBox>
          </S.SubForm>
          <S.SubForm>
            <S.Description>Introduction</S.Description>
            <S.DescriptionInputBox></S.DescriptionInputBox>
          </S.SubForm>
        </S.Form>
        <S.SubmitButton>선생님 등록하기</S.SubmitButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default TeacherRegistration;
