import * as S from "./Category.style";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Link to="/noticePage">
          <S.Category>
            <S.CategoryTitle>지휘자</S.CategoryTitle>
          </S.Category>
        </Link>
        <Link to="/noticePage">
          <S.Category>
            <S.CategoryTitle>반주자</S.CategoryTitle>
          </S.Category>
        </Link>
        <Link to="/noticePage">
          <S.Category>
            <S.CategoryTitle>솔로이스트</S.CategoryTitle>
          </S.Category>
        </Link>
        <Link to="/noticePage">
          <S.Category>
            <S.CategoryTitle>합창 단원</S.CategoryTitle>
          </S.Category>
        </Link>
        <Link to="/noticePage">
          <S.Category>
            <S.CategoryTitle>입시 및 사교육</S.CategoryTitle>
          </S.Category>
        </Link>
      </S.Container>
    </S.Wrapper>
  );
};

export default Category;
