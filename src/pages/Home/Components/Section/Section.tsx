import { Dayjs } from "dayjs";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  DoughtnutChart,
  DoughtnutChartProps,
} from "../DoughnutChart/DoughnutChart";
import {
  SecondContentHeader,
  StyledContent,
  StyledContentHeader,
  StyledContentWrapper,
  StyledSection,
  Wrapper,
} from "./style";

interface ISection {
  graphProps: DoughtnutChartProps;
  firstContent: { subHeader?: string; text: string; color: string };
  secondContent: {
    subHeader?: string | Date | Dayjs;
    text: string;
    color: string;
  };
  backgroundColor: string;
  reversed?: boolean;
  navigateTo?: string | null;
}

export const Section: React.FC<ISection> = ({
  graphProps,
  firstContent,
  secondContent,
  backgroundColor,
  reversed,
  navigateTo,
}) => {
  const navigate = useNavigate();

  return (
    <StyledSection
      backgroundColor={backgroundColor}
      onClick={() => navigateTo && navigate(navigateTo)}
    >
      {reversed ? (
        <>
          <Wrapper>
            <StyledContentWrapper color={firstContent.color}>
              <StyledContentHeader>
                {firstContent.subHeader}
              </StyledContentHeader>
              <StyledContent>{firstContent.text}</StyledContent>
            </StyledContentWrapper>
            <StyledContentWrapper color={secondContent.color}>
              <SecondContentHeader>
                {secondContent.subHeader}
              </SecondContentHeader>
              <StyledContent>{secondContent.text}</StyledContent>
            </StyledContentWrapper>
          </Wrapper>
          <DoughtnutChart data={graphProps.data} colors={graphProps.colors} />
        </>
      ) : (
        <>
          <DoughtnutChart data={graphProps.data} colors={graphProps.colors} />
          <Wrapper>
            <StyledContentWrapper color={firstContent.color}>
              <StyledContentHeader>
                {firstContent.subHeader}
              </StyledContentHeader>
              <StyledContent>{firstContent.text}</StyledContent>
            </StyledContentWrapper>
            <StyledContentWrapper color={secondContent.color}>
              <SecondContentHeader>
                {secondContent.subHeader}
              </SecondContentHeader>
              <StyledContent>{secondContent.text}</StyledContent>
            </StyledContentWrapper>
          </Wrapper>
        </>
      )}
    </StyledSection>
  );
};
