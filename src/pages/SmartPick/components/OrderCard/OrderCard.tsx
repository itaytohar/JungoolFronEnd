import {
  StyledDetail,
  StyledDetailsContainer,
  StyledImage,
  StyledPropertyName,
  StyledPropertyValue,
  Wrapper,
} from "../PickUpSection/style";
import { CardWrapper } from "./style";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

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
      <Wrapper>
        <StyledImage
          // src={require(`../../../../assets/images/suppliers/${supplier}.png`)}
          src={supplier}
          alt="supplier"
        />
        <StyledDetailsContainer>
          <StyledDetail>
            <StyledPropertyName>Order ID: </StyledPropertyName>
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
            <StyledPropertyName>Status: </StyledPropertyName>
            <StyledPropertyValue>{statusDesc}</StyledPropertyValue>
          </StyledDetail>
          <StyledDetail>
            <StyledPropertyName>Location: </StyledPropertyName>
            <StyledPropertyValue>{PackageLocation}</StyledPropertyValue>
          </StyledDetail>
          <StyledDetail>
            <StyledPropertyName>Tracking ID: </StyledPropertyName>
            <StyledPropertyValue>{trackingID}</StyledPropertyValue>
          </StyledDetail>
        </StyledDetailsContainer>
      </Wrapper>
    </CardWrapper>
  );
};

// {
//     "orderID": "637",
//     "trackingID": "FM566052G           ",
//     "statusDesc": "In Process",
//     "PackageLocation": "G-14977             ",
//     "supplier": "https://orderyourlifestore.blob.core.windows.net/suppliers/bangood.png?sv=2020-10-02&st=2022-01-15T12%3A03%3A43Z&se=2023-01-16T12%3A03%3A00Z&sr=b&sp=r&sig=yCZom2hW7KhAPeADiyWg664JXEv7F7ATMbVzXvjcEdI%3D",
//     "tag": "4702-1 The Final Challenge Lego"
// },
