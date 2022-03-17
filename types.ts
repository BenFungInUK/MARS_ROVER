import { directions } from "./constant";

export type Plateau = {
  x: number;
  y: number;
};

export type Facing = typeof directions[number];

export type Rover = {
  x: number;
  y: number;
  facing: Facing;
};
