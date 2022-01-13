import styled from "styled-components";

export const StyledLayout = styled.div<{ backgroundColor: string }>`
  display: flex;
  height: 100%;
  overflow-y: auto;
  flex-direction: column;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Divider = styled.div`
  height: 30px;
  background-color: ${({ theme }) => theme.colors.divider};
`;

export const StyledHeaderWrapper = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledHeader = styled.h1`
  color: ${({ theme }) => theme.colors.previewHeader};
`;

export const BodyContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
`;

export const StyledIcon = styled.img`
  filter: invert(57%) sepia(83%) saturate(3855%) hue-rotate(187deg)
    brightness(102%) contrast(97%);
`;
