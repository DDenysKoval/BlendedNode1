import fs from "node:fs/promises";
import { PATH_DB } from "../constants/products.js";

const getTotalPrice = async () => {
  const readData = await fs.readFile(PATH_DB, "utf-8");
  const parsedData = JSON.parse(readData);
  let totalPrice = 0;
  for (const product of parsedData) {
    totalPrice += Number(product.price);
  };
  return totalPrice;
};

console.log(await getTotalPrice());
