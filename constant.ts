export const directions = ["N", "E", "S", "W"];
export const movements = ["L", "R", "M"];
export const roverLocationActionMapping = {
  N: { x: 0, y: 1, prev: "W", next: "E" },
  E: { x: 1, y: 0, prev: "N", next: "S" },
  S: { x: 0, y: -1, prev: "E", next: "W" },
  W: { x: -1, y: 0, prev: "S", next: "N" },
};
