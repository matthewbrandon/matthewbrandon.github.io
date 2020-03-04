import {
    petWebPal,
} from "./script"

// Describe is a jest method to contain tests, you can wrap a suite of tests in a describe block

describe("Button Click Functions", () => {
    // tests in here
    test("Should make sure you have energy then return amount to increase happiness", () => {
        // actual test
        expect(petWebPal(2)).toEqual(10);
    });
    test("Should return 5x amount", () => {
        // actual test
        expect(petWebPal(1)).toEqual(5);
    });
    test("Should require positive integer", () => {
        expect(petWebPal(-1)).toBe(false);
    });
});