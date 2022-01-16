import styled from "styled-components";

export const MainLayout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;



export const HeaderContainer = styled.div<{ backgroundColor: string }>`
  display: flex;
  height: 10%;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color};
  border-bottom: 1px solid #f3f3f3;
`;
export const StyledHeader = styled.h1`
  color: ${({ color }) => color};
`;

