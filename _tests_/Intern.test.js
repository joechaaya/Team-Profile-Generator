const Intern = require ("../lib/Intern");

describe('Intern class', () => { 
    // constants for intern to test.
    const employeeName = 'Joe Chaaya';
    const employeeId = '117';
    const employeeEmail = 'joechaaya07@gmail.com';
    const employeeSchool = 'Laurentian University';
    
    it("New Intern returns a role of Intern", () =>{
        expect(new Intern(employeeName, employeeId, employeeEmail, employeeSchool).getRole()).toBe('Intern')
    });
    it("New Employee returns employees name", () => {
        expect(new Intern(employeeName, employeeId, employeeEmail, employeeSchool).getName()).toBe(employeeName)
    });
    it("Gives employee ID matching input", () => {
        expect(new Intern(employeeName, employeeId, employeeEmail, employeeSchool).getId()).toBe(employeeId)
    });
    it("Populates email address as passed to function", () =>{
        expect(new Intern(employeeName, employeeId, employeeEmail, employeeSchool).getEmail()).toBe(employeeEmail)
    });
    it("Returns name of school", () =>{
        expect(new Intern(employeeName, employeeId, employeeEmail, employeeSchool).getSchool()).toBe(employeeSchool)
    });

})