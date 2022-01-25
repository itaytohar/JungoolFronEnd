import { CardWrapper, StyledDetailsContainer } from "./style";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {
  StyledDetail,
  StyledPropertyName,
  StyledPropertyValue,
} from "../../../../Shared/styled-elements";

import placeHolder from "../../../../assets/images/placeholder.png";
import { StyledImage } from "../PickUpSection/style";

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
  let src;
  try {
    src = require(`../../../../assets/images/suppliers/${supplier
      .trim()
      .toLowerCase()}.png`);
  } catch (err) {
    src = placeHolder;
  }
  return (
    <CardWrapper>
      <StyledImage alt="supplier" src={src} />
      <StyledDetailsContainer>
        <StyledDetail>
          <StyledPropertyName>Order ID</StyledPropertyName>
          <StyledPropertyValue>{orderID}</StyledPropertyValue>
        </StyledDetail>
        <StyledDetail>
          <StyledPropertyName>Tag: </StyledPropertyName>
          <Tippy content={tag}>
            <StyledPropertyValue ellipsis>
              {tag}
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
