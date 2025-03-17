import React, { ReactNode } from 'react'
import ReactModal, { Props as ReactModalProps, Styles } from "react-modal";
import { merge } from "lodash";

export interface ModalProps extends ReactModalProps{
  children: ReactNode;
  overrideStyles: Styles;
  minHeight?: string;
}

export const DefaultModalStyles = {
  overlay: {
    zIndex: 50,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "0.375rem",
    overlfow: "hidden",
    zIndex: 50,
    minHeight: "25vh",
    maxHeight: "90vh",
  },
}

export const Modal = ({
  children,
  overrideStyles,
  minHeight,
  ...modalProps  
}: ModalProps) => {
  const customModalStyle = {
    overlay: {
      backgroundColor: '',
      ...DefaultModalStyles.overlay,
    },
    content: {
      ...DefaultModalStyles.content
    }
  }
  return (
    <ReactModal
      shouldCloseOnEsc 
      shouldCloseOnOverlayClick
      style={merge(customModalStyle, overrideStyles)} {...modalProps}>
        {children}
    </ReactModal>
  )
}


