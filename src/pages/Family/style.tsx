import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  row-gap: 16px;
  margin: auto 0;
`;

export const StyledFooterImage = styled.div`
  width: 100%;
 
`;

export const StyledMapImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
