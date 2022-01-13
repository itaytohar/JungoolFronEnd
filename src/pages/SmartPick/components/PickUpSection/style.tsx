import styled from "styled-components";

export const StyledPaper = styled.div`
  background-color: white;
  height: 112px;
  width: 90%;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const StyledImage = styled.img`
  height: 90px;
  width: 90px;
`;

export const StyledDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: stretch;
`;

export const StyledDetail = styled.div`
  display: flex;
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
