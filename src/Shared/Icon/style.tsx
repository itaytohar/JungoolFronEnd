import styled from "styled-components";

export const StyledIcon = styled.img<{ size?: "sm" | "md" }>`
  ${({ size }) =>
    size == "md"
      ? `
  height: 40px;
  width: 40px;
  `
      : `
  height: 35px;
  width: 35px;
  `}
  margin-block-end: 4px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledText = styled.p`
  font-size: 8px;
  font-weight: 100;
  text-align: center;
  color: ${({ theme }) => theme.colors.previewHeaderBackground};
`;
