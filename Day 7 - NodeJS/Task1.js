import fs from "fs";
import path from "path";

// // Use relative path (folder will be created where script runs)
// const dirPath = path.resolve("testDir");
// const filePath = path.join(dirPath, "hello.txt");

// // 1️⃣ Create directory
// fs.mkdir(dirPath, { recursive: true }, (err) => {
//   if (err) return console.error("Error creating directory:", err);
//   console.log("Directory created:", dirPath);

//   // 2️⃣ Create text file inside
//   fs.writeFile(filePath, "Hello World", (err) => {
//     if (err) return console.error("Error writing file:", err);
//     console.log("File created:", filePath);
//   });
// });

//Deleting a file and directory


const dirPathd = "./testDir";

fs.rm(dirPathd, { recursive: true, force: true }, (err) => {
  if (err) {
    console.error("Error deleting directory:", err);
  } else {
    console.log("Directory deleted successfully!");
  }
});