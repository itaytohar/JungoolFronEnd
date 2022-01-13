import styled from "styled-components";

export const StyledModal = styled.div<{ isOpen: boolean }>`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.157);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ isOpen }) => (isOpen ? 5 : -2)};
  width: 100%;
  height: 100%;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 0.3s ease-in-out;
`;

export const Box = styled.div`
  position: absolute;
  z-index: 6;
  width: 80%;
  height: 80%;
  background-color: white;
`;
