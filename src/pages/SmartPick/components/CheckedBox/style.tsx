import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ImageContaier = styled.div`
  width: 50%;
  margin-block-end: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled.p`
  white-space: pre;
  text-align: center;
  color: ${({ theme }) => theme.colors.previewHeaderBackground};
`;

export const StyledImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const IconsContainer = styled.div`
  display: flex;
  margin-block-start: 12px;
  width: 60%;
  align-items: flex-start;
  justify-content: space-around;
`;
