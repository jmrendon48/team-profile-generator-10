class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        return name;
    }

    getId() {
        return id;
    }

    getEmail() {
        return email;
    }

    getRole() {
        role = 'Employee';
        return role;
    }
};

module.exports = Employee;