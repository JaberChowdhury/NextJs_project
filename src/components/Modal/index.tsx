"use client";
import useModal from "@/store/useModal";
import { Modal } from "@mantine/core";

function ModalComponent() {
  const { isOpen, closeModal, title, component } = useModal();
  return (
    <>
      <Modal opened={isOpen} onClose={closeModal} title={title} centered>
        {component}
      </Modal>
    </>
  );
}

export default ModalComponent;
