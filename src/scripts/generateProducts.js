import { faker } from "@faker-js/faker";
import { PATH_DB } from "../constants/products.js";
import { createFakeProduct } from "../utills/createFakeProduct.js";
import fs from "node:fs/promises";

const generateProduct = async (number) => {
  const readData = await fs.readFile(PATH_DB, "utf-8");
  const parsedData = JSON.parse(readData);
  const fakeArray = faker.helpers.multiple(createFakeProduct, {
    count: number,
  });
  
  parsedData.push(...fakeArray);
  await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2), "utf-8");
};

generateProduct(3);