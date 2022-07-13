import { sendEvent } from '../src/alloy';

jest.mock("@adobe/alloy");

// let alloySpy;
// let windowSpy;

describe("Alloy", () => {
    beforeEach(() => {
        // const alloy = new Alloy();
        // alloySpy = jest.spyOn(alloy, 'setInstance');
    });

    test('alloy instance should exist', () => {
        sendEvent({ foo: "bar" });
        
        // const instance = getInstance();
        // expect(instance).toBe(2);
    })
})