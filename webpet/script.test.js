import {
    petWebPal,
} from "./script"

// Describe is a jest method to contain tests, you can wrap a suite of tests in a describe block

describe("Button Click Functions", () => {
    // tests in here
    test("Should make sure you have energy then return amount to increase happiness", () => {
        // actual test
        expect(petWebPal(5)).toEqual(10);
    });
});