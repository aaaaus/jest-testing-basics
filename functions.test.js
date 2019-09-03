const functions = require('./functions');

//the 'matcher' below is 'toBe'
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

//using 'not' example
test('Adds 2 + 2 to not equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//toBeNull example
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

//toBeFalsy example
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

//don't use 'toBe' for non-primitive types, use 'toEqual'
test('User should be James Bond object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'James',
    lastName: 'Bond'
  });
});

//greater or less than
test('Should be less than 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

// arrays
test('Admin should be in usernames', () => {
  const usernames = ['Jack', 'Sawyer', 'Admin'];
  expect(usernames).toContain('Admin');
});
