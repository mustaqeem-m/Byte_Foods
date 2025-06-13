import sum from "../sum";
test("Sum fn must return the sum of the two arguments", () => {
    const op = sum(1, 2);
    //Assertion 
    expect(op).toBe(3);
});