const Employee = require("../lib/Employee");

describe('Employee class', () => { 
  
  // constants for employee to test.
  const employeeName = 'Joe Chaaya';
  const employeeId = '117'
  const employeeEmail = 'joechaaya07@gmail.com'
  
  it("New employee returns employees role", () =>{
      expect(new Employee(employeeName, employeeId, employeeEmail).getRole()).toBe('Employee')
  });
  it("New Employee returns employees name", () => {
      expect(new Employee(employeeName, employeeId, employeeEmail).getName()).toBe(employeeName)
  });
  it("Gives employee ID matching input", () => {
      expect(new Employee(employeeName, employeeId, employeeEmail).getId()).toBe(employeeId)
  });
  it("Populates email address as passed to function", () =>{
      expect(new Employee(employeeName, employeeId, employeeEmail).getEmail()).toBe(employeeEmail)
  });

})