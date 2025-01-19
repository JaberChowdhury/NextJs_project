import { faker } from "@faker-js/faker";

export interface PRODUCT {
  name: string;
  id: string;
  price: string;
  offerprice: string;
  owner: string;
  checked: boolean;
  adjective: string;
  description: string;
  material: string;
}

const product: PRODUCT[] = [];
const limit = 1000;

for (let i = 0; i < limit; i++) {
  const data = {
    name: faker.commerce.product(),
    price: faker.commerce.price({ min: 100, max: 500 }),
    offerprice: faker.commerce.price({ min: 100, max: 500 }),
    id: crypto.randomUUID(),
    owner: faker.person.firstName(),
    checked: Math.random() < 0.5,
    adjective: faker.commerce.productAdjective(),
    description: faker.commerce.productDescription(),
    material: faker.commerce.productMaterial(),
  };
  product.push({
    ...data,
    offerprice: faker.commerce.price({
      min: 0,
      max: Number(data.price),
    }),
  });
}

export default product;
