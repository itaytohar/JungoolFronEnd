import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImageContaier = styled.div`
  height: 60%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled.p`
  height: 10%;
  text-align: center;
  width: 60%;
  color: ${({ theme }) => theme.colors.previewHeader};
`;

export const StyledImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const IconsContainer = styled.div`
  display: flex;
  height: 30%;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const StyledIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const StyledCancel = styled(StyledIcon)`
  filter: invert(58%) sepia(40%) saturate(6229%) hue-rotate(187deg)
    brightness(102%) contrast(97%);
`;
