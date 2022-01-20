import styled from "styled-components";

export const MainLayout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div<{ backgroundColor: string }>`
  display: flex;
  padding: 24px 0;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color};
  border-bottom: 1px solid #f3f3f3;
`;
export const StyledHeader = styled.h1`
  color: ${({ color }) => color};
`;

export const SectionsContainer = styled.div<{ isOtherTasksOpen: boolean }>`
  display: flex;
  flex-direction: column;
  height: ${({ isOtherTasksOpen }) => (isOtherTasksOpen ? 0 : "90%")};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;
