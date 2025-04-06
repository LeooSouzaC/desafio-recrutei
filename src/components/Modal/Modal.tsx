"use client";

import React, { ReactNode } from "react";
import { CloseButton, ModalContainer, Overlay } from "./Modal.styles";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>x</CloseButton>
        {children}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
