const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('gets Employee office number', () => {
    const employee = new Manager('Joshua', 1, "jmrendon48@gmail.com", 1);

    expect(employee.officeNumber).toEqual(1);
});

test('gets Employee role', () => {
    const employee = new Manager('Joshua', 1, "jmrendon48@gmail.com", 1);

    expect(employee.role).toBe('Manager');
});