import Tippy from "@tippyjs/react";
import { StyledIcon, StyledText, Wrapper } from "./style";

type IconProps = {
  text?: string;
  url: string;
  size?: "sm" | "md";
  tooltip?: string;
  onClick?: (...args: any) => any;
};

export const Icon: React.FC<IconProps> = ({
  onClick,
  url,
  text,
  tooltip,
  size = "sm",
}) => (
  <Wrapper>
   {tooltip? <Tippy content={tooltip}>
       <StyledIcon src={url} onClick={onClick} size={size} />
   </Tippy>: 
       <StyledIcon src={url} onClick={onClick} size={size} />}
    {text && <StyledText>{text}</StyledText>}
  </Wrapper>
);
