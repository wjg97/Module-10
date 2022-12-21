const Manager = require("../lib/Manager.js");

test("Creating a office number.", () => {
    const officeNumberTest = 1;
    const employeeInstance = new Manager("Wyatt", 666, "gaulkewyatt@gmail.com", officeNumberTest);
    expect(employeeInstance.officeNumber).toEqual(officeNumberTest);
});

test("Testing officeNumberTest will return office number.", () => {
    const officeNumberTest = 1;
    const employeeInstance = new Manager("Wyatt", 666, "gaulkewyatt@gmail.com", officeNumberTest);
    expect(employeeInstance.getOfficeNumber()).toEqual(officeNumberTest);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Wyatt", 666, "gaulkewyatt@gmail.com", 1);
    expect(employeeInstance.getRole()).toEqual(returnValue);
});