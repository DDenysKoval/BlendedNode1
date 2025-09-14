import fs from "node:fs/promises";
import { PATH_DB } from "../constants/products.js";

const getUniqueCategories = async () => {
  const readData = await fs.readFile(PATH_DB, "utf-8");
  const parsedData = JSON.parse(readData);
  return parsedData.reduce((acc, { category }) => {
    if (!acc.includes(category)) {
      acc.push(category);
    }
    return acc;
  }, []);
};

console.log(await getUniqueCategories());
