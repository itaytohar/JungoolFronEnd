import {
  IconsWrapper,
  StyledDetail,
  StyledDetailsContainer,
  StyledImage,
  StyledPropertyName,
  StyledIcon,
  StyledPropertyValue,
  StyledPaper,
  Wrapper,
} from "./style";
const pickupImg = require("../../../../assets/images/package.jpeg");
const checkedIcon = require("../../../../assets/icons/checked.png");
const personIcon = require("../../../../assets/icons/person.png");

interface IPickUpSection {
  pickupId: string;
  eta: string;
  adress: string;
  onClickPerson?: () => any;
  onClickChecked?: () => any;
}

export const PickUpSection: React.FC<IPickUpSection> = ({
  pickupId,
  eta,
  adress,
  onClickChecked,
}) => {
  return (
    <StyledPaper>
      <Wrapper>
        <StyledImage src={pickupImg} />
        <StyledDetailsContainer>
          <StyledDetail>
            <StyledPropertyName>Pickup ID: </StyledPropertyName>
            <StyledPropertyValue>{pickupId}</StyledPropertyValue>
          </StyledDetail>
          <StyledDetail>
            <StyledPropertyName>ETA: </StyledPropertyName>
            <StyledPropertyValue>{eta}</StyledPropertyValue>
          </StyledDetail>
          <StyledDetail>
            <StyledPropertyName>Adress: </StyledPropertyName>
            <StyledPropertyValue>{adress}</StyledPropertyValue>
          </StyledDetail>
        </StyledDetailsContainer>
        <IconsWrapper>
          <StyledIcon onClick={onClickChecked} src={checkedIcon} />
          <StyledIcon src={personIcon} />
        </IconsWrapper>
      </Wrapper>
    </StyledPaper>
  );
};
