const Engineer = require("../lib/Engineer");

describe('Engineer class', () => { 
    // constants for engineer to test.
    const employeeName = 'Joe Chaaya';
    const employeeId = '117';
    const employeeEmail = 'joechaaya07@gmail.com';
    const employeeGithub = 'joechaaya';
    
    it("New engineer returns a role of Engineer", () =>{
        expect(new Engineer(employeeName, employeeId, employeeEmail, employeeGithub).getRole()).toBe('Engineer')
    });
    it("New Employee returns employees name", () => {
        expect(new Engineer(employeeName, employeeId, employeeEmail, employeeGithub).getName()).toBe(employeeName)
    });
    it("Gives employee ID matching input", () => {
        expect(new Engineer(employeeName, employeeId, employeeEmail, employeeGithub).getId()).toBe(employeeId)
    });
    it("Populates email address as passed to function", () =>{
        expect(new Engineer(employeeName, employeeId, employeeEmail, employeeGithub).getEmail()).toBe(employeeEmail)
    });
    it("Returns GitHub id as passed to fucntion", () =>{
        expect(new Engineer(employeeName, employeeId, employeeEmail, employeeGithub).getGithub()).toBe(employeeGithub)
    });

})
