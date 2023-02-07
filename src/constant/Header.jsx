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
              <S.HeaderTitle>구인</S.HeaderTitle>
            </Link>
          </S.HeaderButton>
          <S.HeaderButton>
            <Link to="/newPage">
              <S.HeaderTitle>구직</S.HeaderTitle>
            </Link>
          </S.HeaderButton>
          <S.HeaderButton>
            <Link to="/noticePage">
              <S.HeaderTitle>게시판</S.HeaderTitle>
            </Link>
          </S.HeaderButton>
          <S.HeaderButton>
            <Link to="/teacherRegistration">
              <S.HeaderTitle>선생님 등록</S.HeaderTitle>
            </Link>
          </S.HeaderButton>
          <S.HeaderButton>
            <Link to="/noticeDetailPage">
              <S.HeaderTitle>My Page</S.HeaderTitle>
            </Link>
          </S.HeaderButton>
        </S.Title>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
