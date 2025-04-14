"use client";
import { Modal } from "@mantine/core";
import useModal from "@/store/useModal";

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
