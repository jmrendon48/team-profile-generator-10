const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('gets Engineer GitHub username', () => {
    const engineer = new Engineer('Joshua', 1, "jmrendon48@gmail.com", "jmrendon48");

    expect(engineer.username).toBe('jmrendon48');
});

test('gets Engineer role', () => {
    const engineer = new Engineer('Joshua', 1, "jmrendon48@gmail.com", "jmrendon48");

    expect(engineer.role).toBe('Engineer');
});