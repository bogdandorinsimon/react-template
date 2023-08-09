import { getPowerToWeightRatio } from "./helpers";
import { CAR, INVALID_CAR } from "./mock";

describe("getPowerToWeightRatio", () => {
  it("handles zero weight gracefully", () => {
    const calculatedRatio = getPowerToWeightRatio(INVALID_CAR);

    expect(calculatedRatio).toBeUndefined();
  });

  it("calculates the power-to-weight ratio correctly", () => {
    const expectedRatio = CAR.Horsepower / CAR.Weight_in_lbs;
    const calculatedRatio = getPowerToWeightRatio(CAR);

    expect(calculatedRatio).toBeCloseTo(expectedRatio, 2);
  });
});
