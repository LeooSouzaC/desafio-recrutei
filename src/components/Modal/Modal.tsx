"use client";

import React, { ReactNode } from "react";
import { CloseButton, ModalContainer, Overlay } from "./Modal.styles";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  width?: string;
};

const Modal = ({ isOpen, onClose, children, width }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer width={width}>
        <CloseButton onClick={onClose}>x</CloseButton>
        {children}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
