import { useNavigate } from "react-router-dom";
import { StyledHeader, StyledIcon } from "./style";
import back from "../../assets/icons/back.svg";

import {
  BackButton,
  BodyContainer,
  Divider,
  StyledHeaderWrapper,
  StyledLayout,
} from "./style";

interface IPreviewLayout {
  header: string;
  backgroundColor: string;
}

export const PreviewLayout: React.FC<IPreviewLayout> = ({
  header,
  children,
  backgroundColor,
}) => {
  const navigate = useNavigate();

  return (
    <StyledLayout backgroundColor={backgroundColor}>
      <StyledHeaderWrapper>
        <BackButton onClick={() => navigate(-1)}>
          <StyledIcon src={back} />
        </BackButton>
        <StyledHeader>{header}</StyledHeader>
      </StyledHeaderWrapper>
      <Divider />
      <BodyContainer>{children}</BodyContainer>
    </StyledLayout>
  );
};
