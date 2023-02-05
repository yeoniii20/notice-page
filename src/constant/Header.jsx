import * as S from "./Header.style";

const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.HeaderLogo>Header</S.HeaderLogo>
        <S.Title>
          <S.HeaderButton>
            <S.HeaderTitle>Menu1</S.HeaderTitle>
          </S.HeaderButton>
          <S.HeaderButton>
            <S.HeaderTitle>Menu1</S.HeaderTitle>
          </S.HeaderButton>
          <S.HeaderButton>
            <S.HeaderTitle>Menu1</S.HeaderTitle>
          </S.HeaderButton>
          <S.HeaderButton>
            <S.HeaderTitle>Menu1</S.HeaderTitle>
          </S.HeaderButton>
        </S.Title>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
