import { useNavigate } from "react-router-dom";
import { Icon } from "../../../../Shared/Icon/Icon";
import {
  StyledDetail,
  StyledDetailsContainer,
  StyledImage,
  StyledPropertyName,
  StyledPropertyValue,
} from "../../../../Shared/styled-elements";
import { IconsWrapper, StyledPaper } from "./style";
const pickupImg = require("../../../../assets/images/package.png");
import checkedIcon from "../../../../assets/icons/checked.svg";
import dayjs from "dayjs";
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
  const navigate = useNavigate();
  return (
    <StyledPaper>
      <StyledImage src={pickupImg} />
      <StyledDetailsContainer>
        <StyledDetail>
          <StyledPropertyName>Pickup ID</StyledPropertyName>
          <StyledPropertyValue>{pickupId}</StyledPropertyValue>
        </StyledDetail>
        <StyledDetail>
          <StyledPropertyName>ETA</StyledPropertyName>
          <StyledPropertyValue>{dayjs(eta).format("dddd MM/YY")}</StyledPropertyValue>
        </StyledDetail>
        <StyledDetail>
          <StyledPropertyName>Adress: </StyledPropertyName>
          <StyledPropertyValue>{adress}</StyledPropertyValue>
        </StyledDetail>
      </StyledDetailsContainer>
      <IconsWrapper>
        <Icon size="md" onClick={onClickChecked} url={checkedIcon} />
        <Icon size="md" url={personIcon} onClick={() => navigate("/family")} />
      </IconsWrapper>
    </StyledPaper>
  );
};
