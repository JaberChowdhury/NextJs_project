import MuiCard from "@mui/material/Card";
import { Paper } from "@mui/material";
import DialogOptions from "./DialogOptions";
import useModel from "@/store/useModel";
import DetailedCard from "./DetailedCard";
type propsType = {
  main: string;
  opposite: string;
};

const Card = ({ main, opposite }: propsType) => {
  const { updateContent, isOpen } = useModel();

  const handleClick = () => {
    updateContent(<DetailedCard main={main} opposite={opposite} />);
    isOpen();
  };
  return (
    <MuiCard sx={{ minWidth: 150 }} variant="outlined">
      <Paper
        onClick={handleClick}
        sx={{
          width: 200,
          height: 150,
          cursor: "pointer",
          backgroundImage: `linear-gradient(90deg, ${main} 90%, ${opposite} 10%)`,
        }}
      />
    </MuiCard>
  );
};

export default Card;
