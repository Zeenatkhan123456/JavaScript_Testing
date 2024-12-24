// Extention: JS, TS, JSX, TSX
// import {sum } from "./index";

const multiply =require("./multiply");
// import {test} from "@jest/globals"


const { test,expect,describe } = require("@jest/globals");

// 1. unit of test

describe("Test multiply function with Numbers", function() {

})
describe("Test multiply Funtion with Numbers", function(){
    test("It Should  work with Numbers", function(){
        expect(multiply(2,2 )).toBe(4);
        expect(multiply(5,2 )).toBe(10);
    })
})
