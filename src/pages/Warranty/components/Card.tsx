import { WarrantyPlanCard } from "../../../Shared/WarrantyPlanCard/WarrantyPlanCard";
import {
  StyledDetail,
  StyledDetailsContainer,
  StyledImage,
  StyledPropertyName,
  StyledPropertyValue,
} from "../../SmartPick/components/PickUpSection/style";

type CardProps = {
  url: string;
  warrantyType: string;
  model: string;
  EndDate: string;
};

export const Card: React.FC<CardProps> = ({
  url,
  warrantyType,
  model,
  EndDate,
}) => (
  <WarrantyPlanCard isWarranty viewItem={<img src={url} alt="warranty" />}>
    <StyledImage />
    <StyledDetailsContainer>
      <StyledDetail>
        <StyledPropertyName>Product Type: </StyledPropertyName>
        <StyledPropertyValue>{warrantyType}</StyledPropertyValue>
      </StyledDetail>
      <StyledDetail>
        <StyledPropertyName>Expiration Date: </StyledPropertyName>
        <StyledPropertyValue>{EndDate}</StyledPropertyValue>
      </StyledDetail>
      <StyledDetail>
        <StyledPropertyName>Model: </StyledPropertyName>
        <StyledPropertyValue>{model}</StyledPropertyValue>
      </StyledDetail>
    </StyledDetailsContainer>
  </WarrantyPlanCard>
);
