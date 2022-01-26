import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const StyledImage = styled.img`
  object-fit: contain;
  height: 60px;
  width: 60px;
`;

export const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: minmax(60px, 80px) auto;
  grid-template-rows: auto auto auto;
  align-items: center;
  justify-content: center;
  row-gap: 12px;
  column-gap: 12px;
`;

export const StyledDetail = styled.div<{
  alignText?: boolean;
  gridStart?: number;
  gridEnd?: number;
}>`
  ${({ alignText }) => alignText && `text-align:center;`}
  grid-row-start: ${({ gridStart }) => gridStart && gridStart};
  grid-row-end: ${({ gridEnd }) => gridEnd && gridEnd};
  color: ${({ theme }) => theme.colors.previewHeaderBackground};
  display: flex;
  flex-direction: column;
  color: ${({ color }) => color};
`;

export const StyledPropertyName = styled.p`
  font-size: 12px;
  font-weight: 200;
`;
export const StyledPropertyValue = styled.p<{ ellipsis?: boolean }>`
  ${({ ellipsis }) =>
    ellipsis &&
    `white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;`}
  font-size: 16px;
`;

export const ImgWrapper = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
