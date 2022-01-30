import {
  IconsContainer,
  ImageContaier,
  StyledImg,
  StyledText,
  Wrapper,
} from "./style";
import logo from "../../../../assets/images/modal-logo.svg";
import accept from "../../../../assets/icons/accept.svg";

import cancel from "../../../../assets/icons/cancel.svg";
import { Icon } from "../../../../Shared/Icon/Icon";

export const CheckedBox: React.FC<{
  onClose: () => any;
  onCheck: () => any;
  text: string;
}> = ({ text ,onClose, onCheck }) => (
  <Wrapper>
    <ImageContaier>
      <StyledImg src={logo} />
    </ImageContaier>
    <StyledText>{text}</StyledText>
    <IconsContainer>
      <Icon size="lg" onClick={() => onCheck()} url={accept} />
      <Icon size="lg" onClick={() => onClose()} url={cancel} />
    </IconsContainer>
  </Wrapper>
);
