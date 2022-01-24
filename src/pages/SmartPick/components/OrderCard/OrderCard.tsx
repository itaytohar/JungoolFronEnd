import { CardWrapper } from "./style";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {
  StyledDetail,
  StyledDetailsContainer,
  StyledImage,
  StyledPropertyName,
  StyledPropertyValue,
} from "../../../../Shared/styled-elements";

interface IOrderCard {
  orderID: string;
  trackingID: string;
  statusDesc: string;
  PackageLocation: string;
  supplier: string;
  tag: string;
}

export const OrderCard: React.FC<IOrderCard> = ({
  orderID,
  trackingID,
  statusDesc,
  PackageLocation,
  supplier,
  tag,
}) => {
  return (
    <CardWrapper>
      <StyledImage
        src={require(`../../../../assets/images/suppliers/${supplier
          .trim()
          .toLowerCase()}.png`)}
        alt="supplier"
      />
      <StyledDetailsContainer>
        <StyledDetail>
          <StyledPropertyName>Order ID</StyledPropertyName>
          <StyledPropertyValue>{orderID}</StyledPropertyValue>
        </StyledDetail>
        <StyledDetail>
          <StyledPropertyName>Tag: </StyledPropertyName>
          <Tippy content={tag}>
            <StyledPropertyValue>
              {tag.substring(0, 15) + "..."}
            </StyledPropertyValue>
          </Tippy>
        </StyledDetail>
        <StyledDetail>
          <StyledPropertyName>Status</StyledPropertyName>
          <StyledPropertyValue>{statusDesc}</StyledPropertyValue>
        </StyledDetail>
        <StyledDetail>
          <StyledPropertyName>Location</StyledPropertyName>
          <StyledPropertyValue>{PackageLocation}</StyledPropertyValue>
        </StyledDetail>
        <StyledDetail>
          <StyledPropertyName>Tracking ID</StyledPropertyName>
          <StyledPropertyValue>{trackingID}</StyledPropertyValue>
        </StyledDetail>
      </StyledDetailsContainer>
    </CardWrapper>
  );
};
