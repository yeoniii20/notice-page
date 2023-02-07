import * as S from "./NewPage.style";

const NewPage = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Form>
          <S.SubForm>
            <S.InputBoxTitle>Category</S.InputBoxTitle>
            <S.InputBox></S.InputBox>
          </S.SubForm>
          <S.SubForm>
            <S.InputBoxTitle>Date</S.InputBoxTitle>
            <S.InputBox></S.InputBox>
          </S.SubForm>
          <S.SubForm>
            <S.InputBoxTitle>Member</S.InputBoxTitle>
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
            <S.Title>Title</S.Title>
            <S.TitleInputBox></S.TitleInputBox>
          </S.SubForm>
          <S.SubForm>
            <S.Description>Description</S.Description>
            <S.DescriptionInputBox></S.DescriptionInputBox>
          </S.SubForm>
        </S.Form>
        <S.SubmitButton>Submit</S.SubmitButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default NewPage;
