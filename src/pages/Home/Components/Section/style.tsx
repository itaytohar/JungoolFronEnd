import styled from "styled-components";

export const StyledSection = styled.div<{ backgroundColor: string }>`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ backgroundColor }) => backgroundColor};
  overflow: hidden;
`;

export const StyledContentWrapper = styled.div`
  margin-inline-start: 12px;
  color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  white-space: pre-wrap;
  margin-block-end: 12px;
`;

export const StyledContentHeader = styled.h4`
  font-size: 20px;
  color: ${({ color }) => color};
  font-weight: bold;
  text-transform: uppercase;
`;

export const SecondContentHeader = styled.p`
  font-weight: bold;
`;

export const StyledContent = styled.p``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
`;
