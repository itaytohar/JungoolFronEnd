import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  row-gap: 32px;
  width: 100%;
  margin: auto;
`;

export const StyledFooterImage = styled.div`
  width: 100%;
  height: 30%;
`;

export const StyledMapImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;
