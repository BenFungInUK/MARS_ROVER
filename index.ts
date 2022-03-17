import { askQuestionWithAnswer } from "./src/console";
import { createPlateau } from "./src/plateauSetting";
import { createRover } from "./src/roverState";
import { performRoverAction } from "./src/roverAction";
import { Plateau, Rover } from "./types";

let myPleateau: Plateau = { x: 0, y: 0 };
let myRover: Rover = { x: 0, y: 0, facing: "N" };

export async function startRoverAdventure() {
  try {
    const plateauAnswer = await askQuestionWithAnswer(
      "Set up the size of the Plateau: "
    );
    myPleateau = createPlateau(plateauAnswer.value);
    sendRover();
  } catch (e: unknown) {
    if (e instanceof Error) console.log(e.message, "\n");
    startRoverAdventure();
  }
}

const sendRover = async () => {
  try {
    const roverAnswer = await askQuestionWithAnswer(
      "Place your Rover on the Plateau: "
    );
    myRover = createRover(roverAnswer.value, myPleateau);
    const actionAnswer = await askQuestionWithAnswer(
      "Move your Rover on the Plateau: "
    );
    console.log(performRoverAction(actionAnswer.value, myRover, myPleateau));
    console.log();
    sendRover();
  } catch (e: unknown) {
    if (e instanceof Error) console.log(e.message, "\n");
    startRoverAdventure();
  }
};

startRoverAdventure();
