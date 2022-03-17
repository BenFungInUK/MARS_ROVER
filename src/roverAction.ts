import { clearLastLine } from "./console";
import { Plateau, Rover } from "../types";
import { roverLocationActionMapping } from "../constant";

export function performRoverAction(
  actions: string,
  rover: Rover,
  plateau: Plateau
) {
  clearLastLine();
  validateRoverAction(actions);
  calculateRoverLocation(actions, rover, plateau);
  return rover;
}

const validateRoverAction = (action: string) => {
  if (!action) throw new TypeError("Undefined action");
  const regexp = new RegExp("[^LRM]");
  if (regexp.test(action))
    throw new TypeError("The action can only be 'L'/'R'/'M'. ");
};

const calculateRoverLocation = (
  actions: string,
  rover: Rover,
  plateau: Plateau
) => {
  [...actions].forEach((item, index) => {
    switch (item) {
      case "L":
        rover.facing = roverLocationActionMapping[rover.facing].prev;
        break;
      case "R":
        rover.facing = roverLocationActionMapping[rover.facing].next;
        break;
      case "M":
        rover.x += roverLocationActionMapping[rover.facing].x;
        rover.y += roverLocationActionMapping[rover.facing].y;
        break;
      default:
        break;
    }
  });
  if (rover.x > plateau.x || rover.y > plateau.y)
    throw new TypeError("Oops! The Rover fall off from the Plateau.");
};
