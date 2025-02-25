import MuiCard from "@mui/material/Card";
import { Button, Paper, Stack, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import Grid from "@mui/material/Grid2";
import Utils from "@/lib/utils/main";
import Link from "next/link";

type propsType = {
  main: string;
  opposite: string;
};

const ColorGrid = ({ color }: { color: string }) => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        gridTemplateColumns: "repeat(8, 1fr)",
      }}
    >
      {color.split("").map((digit, index) => (
        <Grid
          sx={{
            width: "24.5px",
            textAlign: "center",
          }}
          key={index}
          size={{ xs: 2, sm: 4, md: 4 }}
        >
          {digit}
        </Grid>
      ))}
      <ContentCopyOutlinedIcon
        sx={{
          color: "white",
          borderRadius: "50%",
          padding: 0.5,
          cursor: "pointer",
        }}
      />
    </Grid>
  );
};

const DetailedCard = ({ main, opposite }: propsType) => {
  const colorUtils = new Utils(main);
  const lightness = colorUtils.generateHSL().main.l;
  return (
    <MuiCard
      sx={{
        minWidth: { md: 250, xl: 350 },
        justifyContent: "center",
        alignItems: "center",
      }}
      variant="outlined"
    >
      <Stack
        direction="row"
        spacing={0.5}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          margin: 1,
        }}
      >
        {lightness > 50 ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
        <Stack
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={2}
        >
          <FavoriteBorderOutlinedIcon
            sx={{
              cursor: "pointer",
            }}
          />
        </Stack>
      </Stack>
      <Paper
        sx={{
          width: "100%",
          height: 150,
          backgroundImage: `linear-gradient(45deg, ${main} 70%, ${opposite} 30%)`,
        }}
      />
      <Stack
        direction="column"
        spacing={0.5}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          margin: 1,
        }}
      >
        <ColorGrid color={main} />
        <ColorGrid color={opposite} />
      </Stack>
      <Stack
        sx={{
          padding: "10px",
        }}
        direction="column"
        spacing={2}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
          spacing={2}
        >
          <Typography>Add to favourite</Typography>
          <Button variant="contained">Add</Button>
        </Stack>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
          spacing={2}
        >
          <Typography>Send to lab</Typography>
          <Button variant="contained">Send</Button>
        </Stack>
      </Stack>
      <Button
        component={Link}
        href={`/color/info/${main.replace("#", "")}`}
        variant="contained"
        sx={{ margin: 2 }}
      >
        See more
      </Button>
    </MuiCard>
  );
};

export default DetailedCard;
