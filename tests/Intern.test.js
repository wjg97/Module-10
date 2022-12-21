const Intern = require("../lib/Intern.js");

test("Create a school.", () => {
    const school = "School Name";
    const employeeInstance = new Intern("Wyatt", 69, "gaulkewyatt@gmail.com", school);
    expect(employeeInstance.school).toEqual(school);
});

test("Testing officeNumber will return office number.", () => {
    const school = "School Name";
    const employeeInstance = new Intern("Wyatt", 69, "gaulkewyatt@gmail.com", school);
    expect(employeeInstance.getSchool()).toEqual(school);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Wyatt", 69, "gaulkewyatt@gmail.com", "School Name");
    expect(employeeInstance.getRole()).toEqual(returnValue);
});