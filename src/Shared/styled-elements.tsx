import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const StyledImage = styled.img`
  object-fit: contain;
  height: 90px;
  width: 90px;
`;

export const StyledDetailsContainer = styled.div`
  color: ${({ theme }) => theme.colors.previewHeaderBackground};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;
  white-space: nowrap;
  justify-content: space-evenly;
`;

export const StyledDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-end: 8px;
  color: ${({ color }) => color};
`;

export const StyledPropertyName = styled.p`
  font-size: 12px;
  font-weight: 200;
`;
export const StyledPropertyValue = styled.p`
  font-size: 16px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  text-align: center;
`;
