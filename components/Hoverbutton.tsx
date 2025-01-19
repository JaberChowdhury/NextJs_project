import { Card, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

interface propsType {
  data: {
    name: string;
    path: string;
  };
}

const Hoverbutton = ({ data }: propsType) => {
  return (
    <Card>
      <Typography variant="h5" href={data.path} component={Link}>
        {data.name}
      </Typography>
    </Card>
  );
};

export default Hoverbutton;
