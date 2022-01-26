import styled from "styled-components";

export const StyledSection = styled.div<{ backgroundColor: string }>`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ backgroundColor }) => backgroundColor};
  overflow: hidden;
`;

export const StyledContentWrapper = styled.div<{
  spacingButtom?: number;
}>`
  margin-bottom: ${({ spacingButtom }) =>
    spacingButtom && spacingButtom * 8 + "px"};
  color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  white-space: pre-wrap;
`;

export const StyledContentHeader = styled.h4`
  font-size: 20px;
  color: ${({ color }) => color};
  font-weight: bold;
  text-transform: uppercase;
`;

export const SecondContentHeader = styled.p`
  font-weight: bold;
  font-size: 15px;
`;

export const StyledContent = styled.p``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
