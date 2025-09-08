const user = {
    name: 'Jon',
    age: 20,
    city: 'London',
    displayInfo: function () {
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }
};
user.displayInfo();