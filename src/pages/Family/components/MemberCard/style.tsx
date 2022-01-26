import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgContainer = styled.div`
  height: 100px;
  width: 100px;
  padding: 2px;
  border: 1px solid ${({ theme }) => theme.colors.smartPick.contentColor};
  border-radius: 50%;
  position: relative;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const StyledLabel = styled.p`
  color: ${({ theme }) => theme.colors.smartPick.contentColor};
  margin-inline-start: 2px;
  margin-block-end: 8px;
  font-size: 17px;
`;
export const StyledNumber = styled.p`
  color: white;
  font-size: 25px;
`;

export const NumberContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.previewHeaderBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -20px;
  transform: translate(-50%, 0);
  left: 50%;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
