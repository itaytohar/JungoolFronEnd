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
import back from "../../assets/icons/back.svg";
import jungool from "../../assets/images/jungool.svg";
import avatar from "../../assets/images/avatar.png";

import {
  BackButton,
  BodyContainer,
  StyledHeaderWrapper,
  StyledLayout,
} from "./style";
import { Icon } from "../Icon/Icon";

interface IPreviewLayout {
    header: string;
    isHome?: boolean;
    bgc?: string;
    isFamily?: boolean;
}

export const PreviewLayout: React.FC<IPreviewLayout> = ({
    header,
    children,
    isHome,
    bgc,
    isFamily,
}) => {
  const navigate = useNavigate();
  const headerArr = header.split(" ");
  return (
    <StyledLayout>
      <StyledHeaderWrapper>
        {!isHome && (
                  <BackButton onClick={() => (isFamily) ? navigate(-1) : navigate(`/home/${customer}`)}>
            <Icon url={back} />
          </BackButton>
        )}
        <Wrapper>
          <StyledLogo src={logo} />
          <HeaderContent isHome={isHome}>
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
      <BodyContainer bgc={isHome ? "white" : bgc}>{children}</BodyContainer>
    </StyledLayout>
  );
};

{
}
