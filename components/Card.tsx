import MuiCard from "@mui/material/Card";
import { Paper } from "@mui/material";
import DialogOptions from "./DialogOptions";
type propsType = {
  main: string;
  opposite: string;
};

const Card = ({ main, opposite }: propsType) => {
  return (
    <MuiCard sx={{ minWidth: 150 }} variant="outlined">
      <DialogOptions main={main} opposite={opposite}>
        <Paper
          sx={{
            width: 200,
            height: 150,
            backgroundImage: `linear-gradient(90deg, ${main} 90%, ${opposite} 10%)`,
          }}
        />
      </DialogOptions>
    </MuiCard>
  );
};

export default Card;
