import styled from "styled-components";

export const CollapsedChild = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

export const CollapsedParent = styled.div<{
  isOpen: boolean;
  type?: "full" | "section";
}>`
  margin-block-end: ${({ type }) => (type === "full" ? 0 : "8px")};
  height: ${({ isOpen, type }) =>
    isOpen ? (type === "full" ? "90%" : "400px") : 0};
  width: 100%;
  overflow: hidden;
  transition: height 0.5s ease-in-out;
`;
