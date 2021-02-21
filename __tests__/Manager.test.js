const Manager = require('../lib/Manager');

test('gets Employee office number', () => {
    const employee = new Manager('Joshua', 1, "jmrendon48@gmail.com", "Employee", 1);

    expect(employee.officeNumber).toEqual(1);
});