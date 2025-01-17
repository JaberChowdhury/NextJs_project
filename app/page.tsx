import React from "react";
import { faker } from "@faker-js/faker";
import { Typography } from "@mui/material";
const page = () => {
  const product_name = faker.commerce.product();
  const product_price = faker.commerce.price({
    min: 100,
    max: 3000,
  });
  return (
    <div>
      page
      <Typography><Typography variant="h1">name</Typography>{product_name}</Typography>
      <Typography><Typography variant="h1">price</Typography>{product_price}</Typography>
    </div>
  );
};

export default page;
