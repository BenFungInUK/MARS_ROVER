import { clearLastLine } from "./console";
import { directions } from "../constant";
import { Plateau, Rover } from "../types";

export function createRover(state: string, location: Plateau) {
  clearLastLine();
  if (!state) throw new TypeError("Undefined coordinate/facing");
  return getRoverState(state, location);
}

const getRoverState = (state: string, location: Plateau): Rover => {
  let roverState = state.split(" ");
  let roverPosX = Number(roverState[0]),
    roverPosY = Number(roverState[1]);
  const regexp = new RegExp("^[0-9]+[ ][0-9]+[ ][NESW]$");

  if (roverPosX < 0 || roverPosY < 0)
    throw new TypeError("Coordinate cannot be negative");
  if (!regexp.test(state))
    throw new TypeError(
      "Incorrect input format received. The correct format: <x y facing>"
    );
  if (roverPosX > location.x || roverPosY > location.y)
    throw new TypeError("Oops! The Rover cannot reach the ground.");

  return { x: roverPosX, y: roverPosY, facing: roverState[2] };
};
