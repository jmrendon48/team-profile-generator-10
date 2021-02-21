const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates a Employee object', () => {
    const employee = new Employee('Joshua', 1, "jmrendon48@gmail.com", "Manager");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});
