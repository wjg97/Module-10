const Engineer = require("../lib/Engineer.js");

test("Can create a github.", () => {
    const testGithub = "wjg97";
    const employeeInstance = new Engineer("Wyatt", 420, "gaulkewyatt@gmail.com", testGithub);
    expect(employeeInstance.github).toEqual(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "wjg97";
    const employeeInstance = new Engineer("Wyatt", 420, "gaulkewyatt@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toEqual(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Wyatt", 420, "gaulkewyatt@gmail.com", "wjg97");
    expect(employeeInstance.getRole()).toEqual(returnValue);
});