import styled from "styled-components";

export const StyledModal = styled.div<{ isOpen: boolean }>`
  position: fixed;
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
  position: fixed;
  z-index: 6;
  width: 80%;
  height: 80%;
  padding: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
