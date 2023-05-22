import { readdir, readFile, writeFile } from "fs";
import { join } from "path";

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = (str: string): string => 
  str
    .split("")
    .reverse()
    .join("");

const processFile = (file: string): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    readFile(join(inbox, file), "utf8", (error, data) => {
      if (error) {
        console.log("Error: File error");
        return reject(error);
      }

      const reversedData = reverseText(data);

      writeFile(join(outbox, file), reversedData, (error) => {
        if (error) {
          console.log("Error: File could not be saved!");
          return reject(error);
        }

        console.log(`${file} was successfully saved in the outbox!`);
        resolve();
      });
    });
  });
};

const processFiles = async (): Promise<void> => {
  try {
    const files = await new Promise<string[]>((resolve, reject) => {
      readdir(inbox, (error, files) => {
        if (error) {
          console.log("Error: Folder inaccessible");
          reject(error);
        } else {
          resolve(files);
        }
      });
    });

    const processFilePromises = files.map((file) => processFile(file));
    await Promise.all(processFilePromises);
  } catch (error) {
    console.error("Error occurred during file processing:", error);
  }
};

processFiles();

export { processFiles, outbox };
