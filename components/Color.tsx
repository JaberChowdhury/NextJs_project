import { HEXADECIMAL } from "@/utils/TYPES";
import { Card, Paper, Typography } from "@mui/material";
import { motion } from "motion/react";
interface propstype {
  data: HEXADECIMAL;
}

const Color = ({ data }: propstype) => {
  return (
    <Card
      style={{
        width: "20rem",
        height: "200px",
        backgroundColor: data.main.color,
        borderRadius: 0,
      }}
      component={motion.div}
      initial={{
        borderRadius: "90px",
        top: 10,
        scale: 0.2,
      }}
      animate={{ scale: 1, top: 1, borderRadius: 0 }}
    >
      <Typography>{data.main.color}</Typography>
    </Card>
  );
};

export default Color;
