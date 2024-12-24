const {describe, test, expect} = require("@jest/globals");

const validate = require("../src/index");

describe("Validate Password", function(){
    test("All condition satisfied", function(){
    expect(validate("aaaaaa1A").status).toBe(true);
    expect(validate("aaaaaa1A").message).toBe("password is valid ");

    });
});

test("less than 8 character should fail", function(){
    expect(validate('1').status).toBe(false);
    expect(validate('1').message.toBe('min 8 char required')

    )
});


// test min 1 lowerCase
// test min 1 upperCase
// all are lower
// all are upper
// all are digit