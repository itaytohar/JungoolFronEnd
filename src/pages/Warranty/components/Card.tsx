import dayjs from "dayjs";
import { CardTemplate } from "../../../Shared/CardTemplate/CardTemplate";
import {
  StyledDetail,
  StyledDetailsContainer,
  StyledImage,
  StyledPropertyName,
  StyledPropertyValue,
  StyledWrapper,
} from "../../../Shared/styled-elements";
import placeHolder from "../../../assets/images/placeholder.png";
import { useTheme } from "styled-components";
import { ThemeType } from "../../../global-styles/theme";

type CardProps = {
  url: string;
  warrantyType: string;
  model: string;
  EndDate: string;
  serviceProvider: string;
};

export const Card: React.FC<CardProps> = ({
  url,
  warrantyType,
  model,
  EndDate,
  serviceProvider,
}) => {
  let src;
  try {
    src = require(`../../../assets/images/products/${warrantyType
      .toLowerCase()
      .trim()}.svg`);
  } catch (err) {
    src = placeHolder;
  }

  const theme = useTheme() as ThemeType;
  return (
    <CardTemplate
      isWarranty
      viewItem={<img style={{ width: "100%" }} src={url} alt="warranty" />}
    >
      <StyledWrapper>
        <StyledImage alt="Product" src={src} />
        <StyledDetail color={theme.colors.warranty.headerColor}>
          <StyledPropertyName>Expiration Date</StyledPropertyName>
          <StyledPropertyValue>
            {dayjs(EndDate).format("DD/YY/MM")}
          </StyledPropertyValue>
        </StyledDetail>
      </StyledWrapper>
      <StyledDetailsContainer>
        <StyledDetail>
          <StyledPropertyName>Product Type</StyledPropertyName>
          <StyledPropertyValue>{warrantyType}</StyledPropertyValue>
        </StyledDetail>
        <StyledDetail>
          <StyledPropertyName>Service Provider</StyledPropertyName>
          <StyledPropertyValue>{serviceProvider}</StyledPropertyValue>
        </StyledDetail>
        <StyledDetail>
          <StyledPropertyName>Model</StyledPropertyName>
          <StyledPropertyValue>{model}</StyledPropertyValue>
        </StyledDetail>
      </StyledDetailsContainer>
    </CardTemplate>
  );
};
