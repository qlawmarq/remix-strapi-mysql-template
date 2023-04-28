import fs from "fs";
import { join, resolve } from "path";

// JSON file path
const dataPath = (path: string = "") => resolve(join("./public/", path));

// function to read file contents
export const readJsonFileByPath = (path: string) => {
  try {
    let data = fs.readFileSync(dataPath(path), "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.log({ error });
    return null;
  }
};

// function to write content to file
export const writeJsonFileToPath = (data: object, path: string) => {
  try {
    fs.writeFileSync(dataPath(path), JSON.stringify(data, null, 2));
    let result = readJsonFileByPath(path);
    return result;
  } catch (error) {
    console.log({ error });
    return null;
  }
};
