import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.renewalPlans.backgroundColor};
  color: ${({ theme }) => theme.colors.renewalPlans.contentColor};
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #c8c7c744;
`;

export const StyledArrow = styled.img<{ isOpen: boolean }>`
  margin-inline-start: 8px;
  transform: ${({ isOpen }) => isOpen && "rotate(-180deg)"};
  transition: transform 300ms ease-in-out;
  filter: invert(58%) sepia(40%) saturate(6229%) hue-rotate(187deg)
    brightness(102%) contrast(97%);
`;

export const StyledFillSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const StyledTextArea = styled.textarea`
  overflow: auto;
  font-family: inherit;
  height: 80%;
  width: 80%;
  outline: none;
  resize: none;
  font-size: 16px;
  margin-block-end: 24px;
`;
export const StyledButton = styled.button`
  font-size: 16px;
  width: 200px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.headerColor};
  color: white;
  border-radius: 10px;
  border: none;
`;
