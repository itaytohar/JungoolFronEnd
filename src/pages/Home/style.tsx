import styled from "styled-components";

export const SectionsContainer = styled.div<{ isOtherTasksOpen: boolean }>`
  display: flex;
  flex-direction: column;
  height: ${({ isOtherTasksOpen }) => (isOtherTasksOpen ? 0 : "90%")};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;
