import { clearLastLine } from "./console";
import { Plateau } from "../types";

export const createPlateau = (coordinates: string) => {
  clearLastLine();
  if (!coordinates) throw new TypeError("Undefined coordinate");
  return getPlateauCoordinate(coordinates);
};

function getPlateauCoordinate(coordinateString: string): Plateau {
  let coordinate = coordinateString.split(" ");
  const regexp = new RegExp("^[0-9]+[ ][0-9]+?$");
  if (Number(coordinate[0]) < 0 || Number(coordinate[1]) < 0)
    throw new TypeError("Coordinates cannot be negative");
  if (!regexp.test(coordinateString))
    throw new TypeError(
      "Incorrect input format received. Please input again: <x y>"
    );
  return { x: Number(coordinate[0]), y: Number(coordinate[1]) };
}
