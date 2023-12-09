// Write your solution in this file!
const employee = {};
employee.name = "Derrick";
employee.streetAddress = "Nairobi";

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value,
      };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, name){
    let newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
    return typeof newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, name){
    //let newEmployee = {...employee};
    delete employee.name ;
    return employee;
}

