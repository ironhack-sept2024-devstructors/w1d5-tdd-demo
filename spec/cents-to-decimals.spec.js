

describe("function centsToDecimals", function(){
    it("Should convert value from cents to floating point number with 2 decimals", function(){
        expect(centsToDecimals(149)).toBe(1.49);
        expect(centsToDecimals(400)).toBe(4.00);
        expect(centsToDecimals(23)).toBe(0.23);
    });

    it("Should return null, if invoked without any argument", function(){
        expect(centsToDecimals()).toBeNull();
    });

    it("Should return null, if invoked with an argument that is not a valid number", function(){
        expect(centsToDecimals("eleven")).toBeNull();
    });
});


