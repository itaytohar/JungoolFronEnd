import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  position: relative;
  background-color: white;
  margin-block-end: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
`;

export const StyledDetailsContainer = styled.div`
  color: ${({ theme }) => theme.colors.previewHeaderBackground};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
  margin-inline-start: 24px;
  white-space: nowrap;
  justify-content: space-evenly;
`;