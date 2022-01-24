import { CardTemplate } from "../../../Shared/CardTemplate/CardTemplate";
import { Document } from "../style";
import placeHolder from "../../../assets/images/placeholder.png";
import {
  StyledDetail,
  StyledDetailsContainer,
  StyledImage,
  StyledPropertyName,
  StyledPropertyValue,
  StyledWrapper,
} from "../../../Shared/styled-elements";
import { useTheme } from "styled-components";
import { ThemeType } from "../../../global-styles/theme";
import dayjs from "dayjs";

type CardProps = {
  EndDate: string;
  monthlyCost: string;
  serviceProvider: string;
  url: string;
};

export const Card: React.FC<CardProps> = ({
  EndDate,
  monthlyCost,
  serviceProvider,
  url,
}) => {
  let src;
  try {
    src = require(`../../../assets/images/ServiceProviders/${serviceProvider
      .toLowerCase()
      .trim()}.png`);
  } catch (err) {
    src = placeHolder;
  }
  const theme = useTheme() as ThemeType;
  return (
    <CardTemplate viewItem={<Document src={url} />}>
      <StyledWrapper>
        <StyledImage alt="Product" src={src} />
        <StyledDetail color={theme.colors.renewalPlans.headerColor}>
          <StyledPropertyName>Expiration Date</StyledPropertyName>
          <StyledPropertyValue>
            {dayjs(EndDate).format("DD/YY/MM")}
          </StyledPropertyValue>
        </StyledDetail>
      </StyledWrapper>
      <StyledDetailsContainer>
        <StyledDetail>
          <StyledPropertyName>Service Provider: </StyledPropertyName>
          <StyledPropertyValue>{serviceProvider}</StyledPropertyValue>
        </StyledDetail>
        <StyledDetail>
          <StyledPropertyName>Monthly Cost: </StyledPropertyName>
          <StyledPropertyValue>{monthlyCost}</StyledPropertyValue>
        </StyledDetail>
      </StyledDetailsContainer>
    </CardTemplate>
  );
};
