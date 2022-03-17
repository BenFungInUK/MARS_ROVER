const { createPlateau } = require("../src/plateauSetting");

describe("Set up the size of plateau", () => {
  test("The coordinates is undefined/null", () => {
    expect(() => createPlateau(undefined)).toThrow("Undefined coordinate");
    expect(() => createPlateau(null)).toThrow("Undefined coordinate");
  });

  test.each([
    ["0 0", { x: 0, y: 0 }],
    ["1 0", { x: 1, y: 0 }],
    ["0 1", { x: 0, y: 1 }],
    ["1 1", { x: 1, y: 1 }],
    ["2 2", { x: 2, y: 2 }],
    ["6 9", { x: 6, y: 9 }],
  ])("The coordinates (%s) are zero/positives ", (input, expected) => {
    expect(createPlateau(input)).toEqual(expected);
  });

  test.each([
    ["-6 9", "Coordinates cannot be negative"],
    ["6 -9", "Coordinates cannot be negative"],
    ["-6 -9", "Coordinates cannot be negative"],
  ])("The coordinates (%s) are negatives ", (input, expected) => {
    expect(() => createPlateau(input)).toThrow(expected);
  });

  test.each([
    ["1", "Incorrect input format received. Please input again: <x y>"],
    ["1 2 3", "Incorrect input format received. Please input again: <x y>"],
    ["4 5 6 7", "Incorrect input format received. Please input again: <x y>"],
  ])(
    "The coordinates (%s) with only one/ more then two numbers",
    (input, expected) => {
      expect(() => createPlateau(input)).toThrow(expected);
    }
  );

  test.each([
    ["1&2", "Incorrect input format received. Please input again: <x y>"],
    ["3|4", "Incorrect input format received. Please input again: <x y>"],
  ])("The coordinates (%s) is not separate with space", (input, expected) => {
    expect(() => createPlateau(input)).toThrow(expected);
  });
});
