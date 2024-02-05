import { CalculateDistanceUseCase } from "./CalculateDistanceUseCase";

describe("CalculateDistanceUseCase", () => {
    let calculateDistanceUseCase: CalculateDistanceUseCase;

    beforeEach(() => {
        calculateDistanceUseCase = new CalculateDistanceUseCase();
    });

    it("Shold be calculate the correct distance between two points", () => {
        const point1 = { coordinate_x: 0, coordinate_y: 0 };
        const point2 = { coordinate_x: 3, coordinate_y: 4 };

        const expectedDistance = 5;

        const calculatedDistance = calculateDistanceUseCase.execute(point1, point2);

        expect(calculatedDistance).toBe(expectedDistance);
    });

    it("should fail to calculate incorrect distance between two points", () => {
        const point1 = { coordinate_x: 0, coordinate_y: 0 };
        const point2 = { coordinate_x: 3, coordinate_y: 4 };

        const expectedDistance = 10;

        const calculatedDistance = calculateDistanceUseCase.execute(point1, point2);

        expect(calculatedDistance).not.toBe(expectedDistance);
    });
});
