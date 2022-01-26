import Tippy from "@tippyjs/react";
import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Collapsed } from "../Collapsed/Collapsed";
import { CardContainer } from "./style";
import { IconsContainer } from "./style";

import fix from "../../assets/icons/fix.svg";
import renew from "../../assets/icons/renew.svg";
import view from "../../assets/icons/view.svg";
import person from "../../assets/icons/person.svg";
import { Icon } from "../Icon/Icon";

interface CardTemplate {
  isWarranty?: boolean;
  viewItem: ReactElement<any, any>;
}
export const CardTemplate: React.FC<CardTemplate> = ({
  viewItem,
  children,
  isWarranty = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <CardContainer>
        {children}
        <IconsContainer>
          <Icon
            url={view}
            text="View"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          />
          <Icon
            url={person}
            text="Delegate"
            onClick={() => navigate("/family")}
          />
          <Icon
            tooltip={`Renew ${isWarranty ? "Warranty" : "Plan"}`}
            url={renew}
            text={"Renew"}
          />
          {isWarranty && <Icon tooltip="Fix" url={fix} text="Fix" />}
        </IconsContainer>
      </CardContainer>
      <Collapsed isOpen={isOpen} viewItem={viewItem} />
    </>
  );
};
