const Manager = require("../lib/Manager");

describe('Manager class', () => { 
   
    // constants for intern to test.
    const employeeName = 'Joe Chaaya';
    const employeeId = '117';
    const employeeEmail = 'Joe Chaaya';
    const employeeOfficenumber = '811';
    
    it("New Intern returns a role of Intern", () =>{
        expect(new Manager(employeeName, employeeId, employeeEmail, employeeOfficenumber).getRole()).toBe('Manager')
    });
    it("New Employee returns a name", () => {
        expect(new Manager(employeeName, employeeId, employeeEmail, employeeOfficenumber).getName()).toBe(employeeName)
    });
    it("Gives employee ID matching input", () => {
        expect(new Manager(employeeName, employeeId, employeeEmail, employeeOfficenumber).getId()).toBe(employeeId)
    });
    it("Populates email address as passed to function", () =>{
        expect(new Manager(employeeName, employeeId, employeeEmail, employeeOfficenumber).getEmail()).toBe(employeeEmail)
    });
    it("Returns office number via getOffice method", () =>{
        expect(new Manager(employeeName, employeeId, employeeEmail, employeeOfficenumber).getOfficeNumber()).toBe(employeeOfficenumber)
    });

})