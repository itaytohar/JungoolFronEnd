import styled from "styled-components";

export const StyledPaper = styled.div`
  display: flex;
  background-color: ${({theme})=> theme.colors.smartPick.backgroundColor};
  height: 150px;
  width: 100%;
  padding: 8px 16px;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid ${({theme})=> theme.colors.previewHeaderBackground};
`;

export const StyledImage = styled.img`
  object-fit: contain;
  height: 60px;
  width: 60px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline-end: 8px;
  align-items: center;
  justify-content: space-around;
  align-self: stretch;
`;

export const StyledIcon = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
`;
