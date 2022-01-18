import { WarrantyPlanCard } from "../../../Shared/WarrantyPlanCard/WarrantyPlanCard";
import {
  StyledDetail,
  StyledDetailsContainer,
  StyledImage,
  StyledPropertyName,
  StyledPropertyValue,
} from "../../SmartPick/components/PickUpSection/style";
import { Document } from "../style";

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
}) => (
  <WarrantyPlanCard viewItem={<Document src={url} />}>
    <StyledImage
      src={require(`../../../assets/images/ServiceProviders/${serviceProvider}.png`)}
    />
    <StyledDetailsContainer>
      <StyledDetail>
        <StyledPropertyName>Service Provider: </StyledPropertyName>
        <StyledPropertyValue>{serviceProvider}</StyledPropertyValue>
      </StyledDetail>
      <StyledDetail>
        <StyledPropertyName>Expiration Date: </StyledPropertyName>
        <StyledPropertyValue>{EndDate}</StyledPropertyValue>
      </StyledDetail>
      <StyledDetail>
        <StyledPropertyName>Monthly Cost: </StyledPropertyName>
        <StyledPropertyValue>{monthlyCost}</StyledPropertyValue>
      </StyledDetail>
    </StyledDetailsContainer>
  </WarrantyPlanCard>
);
