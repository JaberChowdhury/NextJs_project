import { faker } from "@faker-js/faker";

export interface PRODUCT {
  name: string;
  id: string;
  price: string;
  owner: string;
  checked: boolean;
}

const product: PRODUCT[] = [];
const limit = 1000;

for (let i = 0; i < limit; i++) {
  const data = {
    name: faker.commerce.product(),
    price: faker.commerce.price({ min: 100, max: 500 }),
    id: crypto.randomUUID(),
    owner: faker.person.firstName(),
    checked: Math.random() < 0.5,
  };
  product.push(data);
}

export default product;
