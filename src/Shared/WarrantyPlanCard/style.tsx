import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #fff;
  display: flex;
  align-items: center;
`;

export const StyledButton = styled.button`
  width: 100px;
  height: 15px;
`;

export const Collapsed = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

export const CollapsedParent = styled.div<{ isOpen: boolean }>`
  margin-block-end: 8px;
  height: ${({ isOpen }) => (isOpen ? 400 : 0) + "px"};
  width: 100%;
  overflow: hidden;
  transition: height 0.5s ease-in-out;
`;

export const List = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;
