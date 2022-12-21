const Employee = require("../lib/Employee.js");

test("Creates an Employee object.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toEqual("object");
})

test("Testing the name.", () => {
    const name = "Wyatt";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toEqual(name);
})

test("Testing the ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("Wyatt", id);
    expect(employeeInstance.id).toEqual(id);
})

test("Testing the email.", () => {
    const email = "gaulkewyatt@gmail.com";
    const employeeInstance = new Employee("Wyatt", 2, email);
    expect(employeeInstance.email).toEqual(email);
})

test("Gets name with getName method.", () => {
    const testName = "Wyatt";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toEqual(testName);
})

test("Testing ID with getID method.", () => {
    const testID = 2;
    const employeeInstance = new Employee("Wyatt", testID);
    expect(employeeInstance.getId()).toEqual(testID);
})

test("Testing email with getEmail method.", () => {
    const testEmail = "gaulkewyatt@gmail.com";
    const employeeInstance = new Employee("Wyatt", 2, testEmail);
    expect(employeeInstance.getEmail()).toEqual(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Wyatt", 2, "gaulkewyatt@gmail.com");
    expect(employeeInstance.getRole()).toEqual(returnValue);
})