import readline from "readline";
import { Plateau } from "../types";
import util from "util";

export function print(str: string): void {
  console.log(str);
  console.log();
}

export function clear(addTopBorder: boolean): void {
  console.clear();
  if (addTopBorder) {
    print("------------------------------------");
  }
}

// NOTE: this "createInterface" function is built into node and is referring to the console interface - NOT a TypeScript interface!
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const clearLastLine = () => {
  readline.moveCursor(process.stdout, 0, -1);
  readline.clearLine(process.stdout, 1);
};

// this function allows us to prompt the user with a question, and call a callback function with whatever string has been input
export function askQuestion(question: string, callback: (arg: string) => void) {
  reader.question(`❓ ${question} 👉 `, callback);
  reader.close();
}

export async function askQuestionWithAnswer(question: string) {
  console.log(`❓ ${question}  `);
  const it = reader[Symbol.asyncIterator]();
  const line1 = await it.next();
  return line1;
  // reader.close();
}

export function closeReader() {
  reader.close();
}
