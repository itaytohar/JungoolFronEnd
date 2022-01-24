import styled from "styled-components";

export const StyledPaper = styled.div`
  display: flex;
  background-color: white;
  height: 150px;
  width: 100%;
  padding: 8px;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid ${({theme})=> theme.colors.previewHeaderBackground};
`;

export const StyledImage = styled.img`
  object-fit: contain;
  height: 90px;
  width: 90px;
`;

export const StyledDetailsContainer = styled.div`
  margin-inline-start: 8px;
  display: flex;
  flex-direction: column;
  justify-self: stretch;
`;

export const StyledDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-end: 8px;
`;

export const StyledPropertyName = styled.p`
  font-weight: bold;
  font-size: 14px;
  white-space: pre;
`;
export const StyledPropertyValue = styled.p`
  color: #2699fb;
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline-start: 8px;
  align-items: center;
  justify-content: space-around;
  align-self: stretch;
`;

export const StyledIcon = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
`;
