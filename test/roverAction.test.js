const { performRoverAction } = require("../src/roverAction");

jest.mock("../src/roverAction");
let samplePlateau = { x: 5, y: 5 },
  sampleRover = { x: 1, y: 2, facing: "N" };
sampleRover2 = { x: 3, y: 3, facing: "E" };

beforeEach(() => {
  sampleRover = { x: 1, y: 2, facing: "N" };
  sampleRover2 = { x: 3, y: 3, facing: "E" };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Perform the action for Rover", () => {
  test("The input is undefined/null", () => {
    expect(() =>
      performRoverAction(undefined, sampleRover, samplePlateau)
    ).toThrow("Undefined action");
    expect(() => performRoverAction(null, sampleRover, samplePlateau)).toThrow(
      "Undefined action"
    );
  });

  test.each([
    ["RsLMLMLM", "The action can only be 'L'/'R'/'M'. "],
    ["psdokf", "The action can only be 'L'/'R'/'M'. "],
    ["RMLMRLr", "The action can only be 'L'/'R'/'M'. "],
  ])(
    "The coordinate with string other than 'L'/'R'/'M'",
    (action, expected) => {
      expect(() =>
        performRoverAction(action, sampleRover, samplePlateau)
      ).toThrow(expected);
    }
  );

  test.each([
    ["L", { x: 1, y: 2, facing: "W" }],
    ["LM", { x: 0, y: 2, facing: "W" }],
    ["LMLM", { x: 0, y: 1, facing: "S" }],
    ["LLM", { x: 1, y: 1, facing: "S" }],
    ["R", { x: 1, y: 2, facing: "E" }],
    ["RM", { x: 2, y: 2, facing: "E" }],
    ["RMRM", { x: 2, y: 1, facing: "S" }],
    ["RRM", { x: 1, y: 1, facing: "S" }],
    ["LMLMLMLMM", { x: 1, y: 3, facing: "N" }],
  ])("Check the returned coordinate is correct (%s)", (action, expected) => {
    expect(performRoverAction(action, sampleRover, samplePlateau)).toEqual(
      expected
    );
  });

  test.each([["MMRMMRMRRM", { x: 5, y: 1, facing: "E" }]])(
    "Check the returned coordinate is correct (%s)",
    (action, expected) => {
      expect(performRoverAction(action, sampleRover2, samplePlateau)).toEqual(
        expected
      );
    }
  );

  test.each([["MMMMM", "Oops! The Rover fall off from the Plateau."]])(
    "Check if the Rover coordinate is moved out of the Plateau (%s)",
    (action, expected) => {
      expect(() =>
        performRoverAction(action, sampleRover, samplePlateau)
      ).toThrow(expected);
    }
  );
});
