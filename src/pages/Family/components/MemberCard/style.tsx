import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.previewBackground};
  padding: 12px;
  width: 42vw;
  height: 160px;
`;

export const ImgContainer = styled.div`
  height: 50%;
`;

export const StyledLabel = styled.p`
  color: ${({ theme }) => theme.colors.smartPick.contentColor};
  text-align: center;
`;
export const StyledNumber = styled.h1``;
