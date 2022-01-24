import {
  IconsContainer,
  StyledIcon,
  ImageContaier,
  StyledImg,
  StyledText,
  Wrapper,
  StyledCancel,
} from "./style";
const checkmark = require("../../../../assets/images/checkmark.png");
import checkedIcon from "../../../../assets/icons/checked.svg";

const cancel = require("../../../../assets/icons/cancel.png");

export const CheckedBox: React.FC<{
  onClose: () => any;
  onCheck: () => any;
}> = ({ onClose, onCheck }) => (
  <Wrapper>
    <ImageContaier>
      <StyledImg src={checkmark} />
    </ImageContaier>
    <StyledText>Are you sure that your task completed?</StyledText>
    <IconsContainer>
      <StyledIcon onClick={() => onCheck()} src={checkedIcon} />
      <StyledCancel onClick={() => onClose()} src={cancel} />
    </IconsContainer>
  </Wrapper>
);
