import * as S from "./NewPage.style";

const NewPage = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Form>
          <S.SubForm>
            <S.Category>Category</S.Category>
            <S.InputBox></S.InputBox>
          </S.SubForm>
          <S.SubForm>
            <S.Date>Date</S.Date>
            <S.InputBox></S.InputBox>
          </S.SubForm>
          <S.SubForm>
            <S.Member>Member</S.Member>
            <S.InputBox></S.InputBox>
          </S.SubForm>
          <S.SubForm>
            <S.Age>Age</S.Age>
            <S.InputBox></S.InputBox>
          </S.SubForm>
          <S.SubForm>
            <S.PhoneNumber>PhoneNumber</S.PhoneNumber>
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
