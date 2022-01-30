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
import { Modal } from "../../pages/SmartPick/components/Modal/Modal";
import { CheckedBox } from "../../pages/SmartPick/components/CheckedBox/CheckedBox";

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
  const [isFixOpen, setIsFixOpen] = useState(false);
  const [isRenewOpen, setIsRenewOpen] = useState(false);
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
            url={renew}
            text={"Renew"}
            onClick={() => setIsRenewOpen(true)}
          />
          {isWarranty && (
            <Icon url={fix} text="Fix" onClick={() => setIsFixOpen(true)} />
          )}
        </IconsContainer>
        <Modal isOpen={isRenewOpen} onClose={() => setIsRenewOpen(false)}>
          <CheckedBox
            text={
              isWarranty
                ? "Would a REMINDER for an \nautomatic warranty renewal\n interest you?"
                : `Would a REMINDER to renew\n your subscriptionand automatic\n connection to the service provider\n interest you?`
            }
            onCheck={() => console.log()}
            onClose={() => setIsRenewOpen(false)}
          />
        </Modal>
        <Modal isOpen={isFixOpen} onClose={() => setIsFixOpen(false)}>
          <CheckedBox
            text={
              "Would a connection to your\n warranty fix service provider\n interest you?"
            }
            onCheck={() => console.log()}
            onClose={() => setIsFixOpen(false)}
          />
        </Modal>
      </CardContainer>
      <Collapsed isOpen={isOpen} viewItem={viewItem} />
    </>
  );
};
