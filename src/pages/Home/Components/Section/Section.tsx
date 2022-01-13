import React from "react";
import { useNavigate } from "react-router-dom";
import {
  DoughtnutChart,
  DoughtnutChartProps,
} from "../DoughnutChart/DoughnutChart";
import {
  StyledContent,
  StyledContentHeader,
  StyledContentWrapper,
  StyledSection,
} from "./style";

interface ISection {
  graphProps: DoughtnutChartProps;
  contentHeader: { text: string; color: string };
  content: { text: string; color: string };
  backgroundColor: string;
  reversed?: boolean;
  navigateTo: string;
}

export const Section: React.FC<ISection> = ({
  graphProps,
  contentHeader,
  content,
  backgroundColor,
  reversed,
  navigateTo,
}) => {
  const navigate = useNavigate();

  return (
    <StyledSection
      backgroundColor={backgroundColor}
      onClick={() => navigate(navigateTo)}
    >
      {reversed ? (
        <>
          <StyledContentWrapper>
            <StyledContentHeader color={contentHeader.color}>
              {contentHeader.text}
            </StyledContentHeader>
            <StyledContent color={content.color}>{content.text}</StyledContent>
          </StyledContentWrapper>
          <DoughtnutChart data={graphProps.data} colors={graphProps.colors} />
        </>
      ) : (
        <>
          <DoughtnutChart data={graphProps.data} colors={graphProps.colors} />
          <StyledContentWrapper>
            <StyledContentHeader color={contentHeader.color}>
              {contentHeader.text}
            </StyledContentHeader>
            <StyledContent color={content.color}>{content.text}</StyledContent>
          </StyledContentWrapper>
        </>
      )}
    </StyledSection>
  );
};
