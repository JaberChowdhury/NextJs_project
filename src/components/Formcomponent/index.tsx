import useModal from "@/store/useModal";
import { Button, Stack } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import React from "react";
import Formcomponent from "./Form";

const index = () => {
  const { openModal, setComponent } = useModal();
  const handleClick = () => {
    openModal();
    setComponent(<Formcomponent />);
  };

  return (
    <Stack className="items-end justify-end flex-row w-full">
      <Button
        onClick={handleClick}
        color="black"
        leftSection={<IconPlus className="text-md" />}
      >
        Add
      </Button>
    </Stack>
  );
};

export default index;
