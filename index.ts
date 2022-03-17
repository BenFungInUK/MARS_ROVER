import { askQuestionWithAnswer } from "./src/console";
import { createPlateau } from "./src/plateauSetting";
import { createRover } from "./src/roverState";
import { Plateau, Rover } from "./types";

let myPleateau: Plateau = { x: 0, y: 0 };
let myRover: Rover = { x: 0, y: 0, facing: "N" };

export async function startRoverAdventure() {
  const plateauAnswer = await askQuestionWithAnswer(
    "Set up the size of the Plateau: "
  );
  myPleateau = createPlateau(plateauAnswer.value);
  const roverAnswer = await askQuestionWithAnswer(
    "Place your Rover on the Plateau: "
  );
  myRover = createRover(roverAnswer.value, myPleateau);
}

startRoverAdventure();
