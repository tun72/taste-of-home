import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useOutSideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  transition: all 0.5s;
  overflow-y: scroll;
  width: 60rem;
  height: 60rem;

  &::-webkit-scrollbar {
    position: absolute;
    width: 0px;
    height: 0px;
  }

  &::-webkit-scrollbar-track {
    background: transprant;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-brand-500);
    border-radius: 10px;
    transition: all 0.3s;
  }

  &::-webkit-scrollbar-thumb:hover {
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: var(--color-green-700);
  color: white;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;
  z-index: 1001;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
      stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ close, open, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: OpenName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(OpenName) });
}

function Close({ children, handelFunction }) {
  const { close } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => {
      close();
      handelFunction();
    },
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  const { ref } = useOutSideClick(() => {
    close();
  });

  if (name !== openName) return null;
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>
        <div>{cloneElement(children, { onCloseModal: () => close() })}</div>
      </StyledModal>
    </Overlay>,
    document.body,
    // document.querySelector()
  );
}

Modal.Open = Open;
Modal.Window = Window;
Modal.Close = Close;
export default Modal;
