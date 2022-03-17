import {
  clear,
  clearLastLine,
  closeReader,
  print,
  askQuestion,
  askQuestionWithAnswer,
} from "./src/console";
import { createPlateau } from "./src/createPlateau";
import { Plateau } from "./types";

let myPleateau: Plateau = { x: 0, y: 0 };

export async function startRoverAdventure() {
  const answer = await askQuestionWithAnswer(
    "Set up the size of the Plateau: "
  );
  myPleateau = createPlateau(answer.value);
}

startRoverAdventure();
