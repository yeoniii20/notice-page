import * as S from "./Header.style";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleLogo>
          <Link to="/">
            <S.HeaderLogo>Header</S.HeaderLogo>
          </Link>
        </S.TitleLogo>

        <S.Title>
          <S.HeaderButton>
            <Link to="/newPage">
              <S.HeaderTitle>Menu1</S.HeaderTitle>
            </Link>
          </S.HeaderButton>
          <S.HeaderButton>
            <Link to="/NoticePage">
              <S.HeaderTitle>Menu2</S.HeaderTitle>
            </Link>
          </S.HeaderButton>
          <S.HeaderButton>
            <Link to="/NoticeDetailPage">
              <S.HeaderTitle>Menu3</S.HeaderTitle>
            </Link>
          </S.HeaderButton>
          <S.HeaderButton>
            <Link to="/newPage">
              <S.HeaderTitle>Menu4</S.HeaderTitle>
            </Link>
          </S.HeaderButton>
        </S.Title>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
