let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Mary', salary: 2000}],
    development: {
        web: [{name: 'Peter', salary: 1500}, {name: 'Alex', salary: 2500}],
        internals: [{name: 'Jack', salary: 5000}, {name: 'Mary', salary: 3000}]
    }
};
let companySalaryValue = 0;
for (let department in company.sales) {
    companySalaryValue += company.sales[department].salary;
}
for (let department in company.development) {
    for (let position in company.development[department]) {
        companySalaryValue += company.development[department][position].salary;
    }
}
console.log(companySalaryValue);
