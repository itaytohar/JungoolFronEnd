import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  row-gap: 40px;
  width: 100%;
  margin: auto;
`;

export const StyledFooterImage = styled.div`
  width: 100%;
  height: 40%;
  margin-top: 12px;
  position: relative;
`;

export const StyledMapImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

export const MemberMap = styled.img<{ top: number; right: number }>`
  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 50%;
  object-fit: cover;
  top: ${({ top }) => top + "%"};
  right: ${({ right }) => right + "%"};
`;
