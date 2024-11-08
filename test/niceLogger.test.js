const {niceLogger, messageRepeater } = require("../src/niceLogger.js");

  describe("niceLogger Function Tests", () => {

    // Different test cases
    test("nicelogger returns Hello World", () => {
        // Test happens here
        // expect(sth).toBe(sth);
    
        // Lets make a test
        expect(niceLogger).toBe("Hello World.");
      });
      test("nicelogger returns Hello World", () => {
        // Test happens here
        // expect(sth).toBe(sth);
    
        // Lets make a test
        expect(niceLogger).toBe("Hello World.");
      });
});

describe("messageRepeater Function tests", () => {

    test("messageRepeater repeats words correctly", () => {
        let repeatedMessage = messageRepeater("hello");

        expect(repeatedMessage).toEqual("hellohellohello");
        expect(repeatedMessage).toHaveLength(15);
    });
   
    test("messageRepeater repeats numbers correctly", () => {
        let repeatedMessage = messageRepeater(1);

        expect(repeatedMessage).toEqual("111");
        expect(repeatedMessage).toHaveLength(3);
    });

    test.skip("messageRepeater repeats arrays correctly", () => {
        let repeatedMessage = messageRepeater(["Hello", "World"]);

        expect(repeatedMessage).toEqual("Hello", "World");
        expect(repeatedMessage).toHaveLength(6);
    });

    test("messageRepeater repeates null or whitespace correctly", () => {
    let repeatedMessage = messageRepeater([""]);

    expect(repeatedMessage).toEqual("");
    expect(repeatedMessage).toHaveLength(0);
    });
});
