let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Mary', salary: 2000}],
    development: {
        web: [{name: 'Peter', salary: 1500}, {name: 'Alex', salary: 2500}],
        internals: [{name: 'Jack', salary: 5000}, {name: 'Mary', salary: 3000}]
    }
};

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let subDepartment of Object.values(department)) {
            sum += sumSalaries(subDepartment);
        }
        return sum;
    }
}

console.log(sumSalaries(company));
