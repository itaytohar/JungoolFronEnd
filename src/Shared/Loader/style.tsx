import styled from "styled-components";
import { motion } from "framer-motion";

export const LoaderContainer = styled.div`
  position: absolute;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(73, 196, 168, 23%);
`;

const circleSize = (size: "xs" | "sm" | "md" | "lg") => {
  switch (size) {
    case "xs":
      return `
      width:14px;
      height:14px;
      `;
    case "sm":
      return `
        width:18px;
        height:18px;
      `;
    case "md":
      return `
          width:20px;
          height:20px;
        `;
    case "lg":
      return `
          width:35px;
          height:35px;
        `;
  }
};

export const LoaderCircle = styled(motion.span)<{
  color: string;
  size: "xs" | "sm" | "md" | "lg";
}>`
  ${({ size }) => circleSize(size)}
  background-color: ${({ color }) => color};
  border-radius: 50%;
`;

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
`;
