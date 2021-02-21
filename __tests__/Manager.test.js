const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('gets Manager office number', () => {
    const manager = new Manager('Joshua', 1, "jmrendon48@gmail.com", 1);

    expect(manager.officeNumber).toEqual(1);
});

test('gets Manager role', () => {
    const manager = new Manager('Joshua', 1, "jmrendon48@gmail.com", 1);

    expect(manager.role).toBe('Manager');
});