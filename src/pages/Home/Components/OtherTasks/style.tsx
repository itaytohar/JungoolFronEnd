import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 10%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.warranty.backgroundColor};
  color: ${({ theme }) => theme.colors.renewalPlans.contentColor};
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #c8c7c744;
`;

export const StyledButtonText = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 20px;
`;

export const StyledOpenButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.warranty.contentColor};
  color: white;
  border-radius: 24px;
  border: none;
`;

export const StyledArrow = styled.img<{ isOpen: boolean }>`
  margin-inline-end: 12px;
  transform: ${({ isOpen }) => isOpen && "rotate(180deg)"};
  transition: transform 300ms ease-in-out;
  filter: brightness(3);
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
  background-color: ${({ theme }) => theme.colors.warranty.contentColor};
  color: white;
  border-radius: 10px;
  border: none;
`;
