const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('gets Intern school', () => {
    const intern = new Intern('Joshua', 1, "jmrendon48@gmail.com", "UCLA Extension");

    expect(intern.school).toBe('UCLA Extension');
});

test('gets Intern role', () => {
    const intern = new Intern('Joshua', 1, "jmrendon48@gmail.com", "UCLA Extension");

    expect(intern.role).toBe('Intern');
});