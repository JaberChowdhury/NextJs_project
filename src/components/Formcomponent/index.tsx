import useModal from "@/store/useModal";
import { Button, Stack } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

const Formcomponent = () => {
  const { openModal, setComponent } = useModal();
  const handleClick = () => {
    openModal();
    setComponent(<div>form</div>);
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

export default Formcomponent;
