import readline from "readline";

export const clearLastLine = () => {
  readline.moveCursor(process.stdout, 0, -1);
  readline.clearLine(process.stdout, 1);
};

export async function askQuestionWithAnswer(question: string) {
  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  console.log(`❓ ${question}  `);
  const it = reader[Symbol.asyncIterator]();
  const line1 = await it.next();
  reader.close();
  return line1;
}
