const { createRover } = require("../src/roverState");

describe("Set up the action for Rover", () => {
  let samplePlateau = { x: 10, y: 10 };

  test("The input is undefined/null", () => {
    expect(() => createRover(undefined, samplePlateau)).toThrow(
      "Undefined coordinate/facing"
    );
    expect(() => createRover(null, samplePlateau)).toThrow(
      "Undefined coordinate/facing"
    );
  });

  test.each([
    ["0 0 N", { x: 0, y: 0, facing: "N" }],
    ["1 0 E", { x: 1, y: 0, facing: "E" }],
    ["0 1 W", { x: 0, y: 1, facing: "W" }],
    ["1 1 S", { x: 1, y: 1, facing: "S" }],
    ["2 2 N", { x: 2, y: 2, facing: "N" }],
    ["6 9 E", { x: 6, y: 9, facing: "E" }],
  ])("The coordinate (%s) are zero/positives ", (rover, expected) => {
    expect(createRover(rover, samplePlateau)).toEqual(expected);
  });

  test.each([
    ["-6 9 N", "Coordinate cannot be negative"],
    ["6 -9 N", "Coordinate cannot be negative"],
    ["-6 -9 N", "Coordinate cannot be negative"],
  ])("The coordinate (%s) are negatives ", (input, expected) => {
    expect(() => createRover(input, samplePlateau)).toThrow(expected);
  });

  test.each([
    [
      "1 E",
      "Incorrect input format received. The correct format: <x y facing>",
    ],
    [
      "1 2 3 S",
      "Incorrect input format received. The correct format: <x y facing>",
    ],
    [
      "4 5 6 7 W",
      "Incorrect input format received. The correct format: <x y facing>",
    ],
  ])(
    "The coordinate with only one/ more then two numbers",
    (input, expected) => {
      expect(() => createRover(input, samplePlateau)).toThrow(expected);
    }
  );

  test.each([
    ["1&2 S", "Incorrect input format received. "],
    ["3|4 W", "Incorrect input format received. "],
  ])("The coordinate (%s) is not separate with space", (input, expected) => {
    expect(() => createRover(input, samplePlateau)).toThrow(expected);
  });

  test.each([
    ["11 1 E", "Oops! The Rover cannot reach the ground."],
    ["1 11 S", "Oops! The Rover cannot reach the ground."],
    ["11 11 W", "Oops! The Rover cannot reach the ground."],
  ])("The coordinate (%s) is out of the Plateau", (input, expected) => {
    expect(() => createRover(input, samplePlateau)).toThrow(expected);
  });

  test.each([
    ["1 1 A", "The facing can only be 'N'/'E'/'S'/'W'. "],
    ["1 2 B", "The facing can only be 'N'/'E'/'S'/'W'. "],
    ["4 5 C", "The facing can only be 'N'/'E'/'S'/'W'. "],
  ])("The facing (%s) is other than 'N'/'E'/'S'/'W'", (input, expected) => {
    expect(() => createRover(input, samplePlateau)).toThrow(expected);
  });
});
