import fs from "node:fs/promises";
import { PATH_DB } from "../constants/products.js";
import { read } from "node:fs";

const getProductsByMinPrice = async (minPrice) => {
  const readData = await fs.readFile(PATH_DB, "utf-8");
  const parsedData = JSON.parse(readData);
  const filteredPrice = parsedData.filter((product) => product.price >= minPrice);
  return filteredPrice;
};

console.log(await getProductsByMinPrice(400));
