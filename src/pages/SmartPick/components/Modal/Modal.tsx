import { Box, StyledModal } from "./style";

type ModalProps = {
  isOpen: boolean;
  onClose: () => any;
};

export const Modal: React.FC<ModalProps> = ({ children, onClose, isOpen }) => {
  return (
    <StyledModal isOpen={isOpen} onClick={onClose}>
      <Box onClick={(ev) => ev.stopPropagation()}>{children}</Box>
    </StyledModal>
  );
};
