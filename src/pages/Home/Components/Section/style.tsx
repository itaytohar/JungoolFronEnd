import styled from "styled-components";

export const StyledSection = styled.div<{ backgroundColor: string }>`
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  margin-inline-start: 24px;
  white-space: pre-wrap;
`;

export const StyledContentHeader = styled.h4`
  color: ${({ color }) => color};
  font-weight: bold;
  margin-block-end: 8px;
  margin-block-start: 8px;
  text-transform: uppercase;
`;

export const StyledContent = styled.p`
  color: ${({ color }) => color};
`;
