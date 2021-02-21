const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates a Employee object', () => {
    const employee = new Employee('Joshua', 1, "jmrendon48@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});

test('gets Employee name', () => {
    const employee = new Employee('Joshua', 1, "jmrendon48@gmail.com");

    expect(employee.name).toBe('Joshua');
});

test('gets Employee ID', () => {
    const employee = new Employee('Joshua', 1, "jmrendon48@gmail.com");

    expect(employee.id).toEqual(1);
});

test('gets Employee email', () => {
    const employee = new Employee('Joshua', 1, "jmrendon48@gmail.com");

    expect(employee.email).toBe('jmrendon48@gmail.com');
});

test('gets Employee role', () => {
    const employee = new Employee('Joshua', 1, "jmrendon48@gmail.com");

    expect(employee.role).toBe('Employee');
});