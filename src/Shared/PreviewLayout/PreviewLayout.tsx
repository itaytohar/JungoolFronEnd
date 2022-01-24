import { useNavigate } from "react-router-dom";
import {
  Avatar,
  HeaderContent,
  StyledLabelThick,
  StyledLabelThin,
  StyledLogo,
  Wrapper,
} from "./style";
import logo from "../../assets/images/Logo.svg";
import jungool from "../../assets/images/jungool.svg";
import avatar from "../../assets/images/avatar.svg";

import {
  BackButton,
  BodyContainer,
  StyledHeaderWrapper,
  StyledLayout,
} from "./style";

interface IPreviewLayout {
  header: string;
  isHome?: boolean;
}

export const PreviewLayout: React.FC<IPreviewLayout> = ({
  header,
  children,
  isHome,
}) => {
  // const navigate = useNavigate();
  const headerArr = header.split(" ");
  return (
    <StyledLayout>
      <StyledHeaderWrapper>
        <Wrapper>
          <StyledLogo src={logo} />
          <HeaderContent>
            <StyledLabelThin>{headerArr[0]}</StyledLabelThin>
            {isHome ? (
              <img src={jungool} />
            ) : (
              <StyledLabelThick>{headerArr[1]}</StyledLabelThick>
            )}
          </HeaderContent>
        </Wrapper>
        <Avatar src={avatar} />
      </StyledHeaderWrapper>
      <BodyContainer>{children}</BodyContainer>
    </StyledLayout>
  );
};

{
  /* <BackButton onClick={() => navigate(-1)}>
          <StyledIcon src={back} />
        </BackButton> */
}
