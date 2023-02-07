import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  display: flex;
  background-color: gray;
  /* column-gap: 10px; */
  justify-content: space-between;
  padding: 0px 32px;
`;

export const TitleLogo = styled.div`
  a:link {
    text-decoration: none;
  }
`;

export const HeaderLogo = styled.h1`
  display: flex;
  color: #eaeaea;

  color: #eaeaea;

  &:hover {
    color: lightgray;
  }
  &:active {
    color: #707070;
  }
`;

export const Title = styled.div`
  display: flex;
  color: #eaeaea;
  column-gap: 70px;
`;

export const HeaderButton = styled.button`
  color: #eaeaea;
  background-color: gray;
  border-color: transparent;
  align-items: center;

  a:link {
    text-decoration: none;
  }
`;

export const HeaderTitle = styled.h1`
  color: #eaeaea;

  &:hover {
    color: lightgray;
  }
  &:active {
    color: #707070;
  }
`;
