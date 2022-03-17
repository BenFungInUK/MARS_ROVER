import { clearLastLine, closeReader } from "./console";
import { Plateau } from "../types";

export const createPlateau = (coordinates: string) => {
  clearLastLine();
  closeReader();
  if (!coordinates) throw new TypeError("Undefined coordinates");
  return getPlateauCoordinate(coordinates);
};

function getPlateauCoordinate(coordinateString: string): Plateau {
  let coordinate = coordinateString.split(" ");
  if (coordinate.length <= 1 || coordinate.length > 2)
    throw new TypeError(
      "Incorrect input format received. Please input again: <x y>"
    );
  if (Number(coordinate[0]) < 0 || Number(coordinate[1]) < 0)
    throw new TypeError("Coordinates cannot be negative");
  return { x: Number(coordinate[0]), y: Number(coordinate[1]) };
}
