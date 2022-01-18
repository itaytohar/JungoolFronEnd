import { ReactElement } from "react";
import { CollapsedChild, CollapsedParent } from "./style";

interface ICollapsed {
  viewItem: ReactElement<any, any>;
  isOpen: boolean;
  type?: "full" | "section";
}

export const Collapsed: React.FC<ICollapsed> = ({ viewItem, isOpen, type }) => {
  return (
    <CollapsedParent isOpen={isOpen} type={type}>
      <CollapsedChild>{viewItem}</CollapsedChild>
    </CollapsedParent>
  );
};
