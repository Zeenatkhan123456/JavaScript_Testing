// Extention: JS, TS, JSX, TSX
// import {sum } from "./index";

const sum =require("./index");
// import {test} from "@jest/globals"


const { test,expect,describe } = require("@jest/globals");

// 1. unit of test

describe("Test Sum function with Numbers", function() {

})
describe("Test sum Funtion with characters ", function(){
    test("It Should not work with characters", function(){
        expect(sum("a", "b")).toBeUndefined()
    })
})

// test("Should work on all positive number ", function(){
// // Assortions
// // left: actual
// // right: expected
// expect(sum(2,2)).toBe(4);
// // expect(sum(0,0)).toBe(10);

// expect(sum(0,0)).toBe(0);
// // expect(sum(10,15)).toBe(25);


// expect(sum(100,0)).toBe(100);

// })

// test("should worl on all negative number", function(){
//     expect(sum(-2,-2)).toBe(-4);

// })