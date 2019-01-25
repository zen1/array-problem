const chai = require('chai');
const expect = chai.expect;

const testedFunction = require("../index");

let emptyArray = [];
let testArray = [];
let resultArray = [];
let zeroResultArray = [];
let arrayLength = 0;

describe("Remove Zero Method", () => {

    beforeEach(() => {
        testArray = [0, 5, 6, 57, 4, 0, 3, 2, 4, 0, 0, 0, 34];
        arrayLength = testArray.length;
        resultArray = testedFunction(testArray);
    });

    describe("Should", () => {

        it("Return a message if passed an empty array", () => {
            expect(testedFunction(emptyArray)).equal("Please pass an array with values")
        })

        it("Return an Array", () => {
            expect(resultArray).to.be.an("array")
        })

        it("Return an array that has the same length as the one passed in", () => {
            expect(resultArray.length).to.equal(arrayLength)
        })

        it("Return an array that does not start with zero if there are numbers greater than zero", () => {
            expect(resultArray[0]).to.be.above(0)
        })

        it("Return an array that ends with zero if there are zeros in the array", () => {
            expect(resultArray[resultArray.length - 1]).to.equal(0)
        })

        it("Return the same array back if it is only filled with zeros", () => {
          zeroTestArray = [0,0,0,0,0,0,0,0,0,0,0,0];
          zeroTestLength = zeroTestArray.length;
          zeroResultArray = testedFunction(zeroTestArray);

          expect(zeroResultArray.length).to.equal(zeroTestLength);
          expect(zeroResultArray[0]).to.equal(0)
          expect(zeroResultArray[zeroResultArray.length - 1]).to.equal(0)
        });
    })
})