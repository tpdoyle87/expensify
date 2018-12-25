const add = (a, b ) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello, ${name}`

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('Should greet Thomas by saying Hello, Thomas', () => {
  expect(generateGreeting("Thomas")).toBe("Hello, Thomas")
})

test("Should greet a user with no name", () => {
  expect(generateGreeting()).toBe("Hello, Anonymous");
})
