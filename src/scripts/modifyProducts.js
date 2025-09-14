import fs from "node:fs/promises";
import { PATH_DB } from "../constants/products.js";

const modifyProducts = async () => {
  const readData = await fs.readFile(PATH_DB, "utf-8");
  const parsedData = JSON.parse(readData);
  const categories = parsedData.map(({ description, ...data }) => data);
  fs.writeFile(PATH_DB, JSON.stringify(categories, null, 2), "utf-8");
};
modifyProducts();