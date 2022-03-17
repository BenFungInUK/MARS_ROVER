import { clearLastLine, closeReader } from "./console";
import { directions } from "../constant";
import { Plateau, Rover } from "../types";

export function createRover(state: string, location: Plateau) {
  clearLastLine();
  closeReader();
  if (!state) throw new TypeError("Undefined coordinate/facing");
  return getRoverState(state, location);
}

const getRoverState = (state: string, location: Plateau): Rover => {
  let roverState = state.split(" ");
  let roverPosX = Number(roverState[0]),
    roverPosY = Number(roverState[1]);

  if (
    roverState.length <= 1 ||
    roverState.length > 3 ||
    isNaN(roverPosX) ||
    isNaN(roverPosY)
  )
    throw new TypeError(
      "Incorrect input format received. The correct format: <x y facing>"
    );
  if (roverPosX < 0 || roverPosY < 0)
    throw new TypeError("Coordinate cannot be negative");
  if (roverPosX > location.x || roverPosY > location.y)
    throw new TypeError("Oops! The Rover cannot reach the ground.");
  if (directions.indexOf(roverState[2]) === -1)
    throw new TypeError("The facing can only be 'N'/'E'/'S'/'W'. ");

  return { x: roverPosX, y: roverPosY, facing: roverState[2] };
};
