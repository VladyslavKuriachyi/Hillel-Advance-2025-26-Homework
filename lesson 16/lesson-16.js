function Person(name, lastName, yearOfBirth) {
    this.name = name;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
    this.attendanceIndex = 0;
}

Person.prototype.addGrade = function (grade) {
    this.grades.push(grade);
};

Person.prototype.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearOfBirth;
};

Person.prototype.getGPA = function () {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((a, b) => a + b, 0);
    return sum / this.grades.length;
};

Person.prototype.present = function () {
    if (this.attendanceIndex >= 25) {
        console.log(`${this.name} ${this.lastName} already attended 25 times`);
        return;
    }
    this.attendance[this.attendanceIndex] = true;
    this.attendanceIndex++;
};

Person.prototype.absent = function () {
    if (this.attendanceIndex >= 25) {
        console.log(`${this.name} ${this.lastName} already attended 25 times`);
        return;
    }
    this.attendance[this.attendanceIndex] = false;
    this.attendanceIndex++;
};

Person.prototype.summary = function () {
    const gpa = this.getGPA();
    const filled = this.attendance.filter(a => a !== null);
    const presentCount = filled.filter(a => a === true).length;
    const attendanceRate = filled.length > 0 ? presentCount / filled.length : 0;

    if (gpa > 90 && attendanceRate > 0.9) {
        return "Great job!";
    } else if (gpa > 90 || attendanceRate > 0.9) {
        return "Not bad, but you can do better.";
    } else {
        return "Tomato!";
    }
};


const student = new Person('John', 'Smith', 1990);
const student1 = new Person('Peter', 'Lens', 1997);
const student2 = new Person('Mary', 'Clark', 1995);

student.addGrade(100);
student.addGrade(95);
student.addGrade(93);
for (let i = 0; i < 23; i++) student.present();
for (let i = 0; i < 2; i++) student.absent();

student1.addGrade(90)
student1.addGrade(85)
student1.addGrade(90)
for (let i = 0; i < 20; i++) student1.present();
for (let i = 0; i < 2; i++) student1.absent();

student2.addGrade(60)
student2.addGrade(55)
student2.addGrade(45)
for (let i = 0; i < 25; i++) student2.absent();

console.log(student.name, "-", student.summary());
console.log(student1.name, "-", student1.summary());
console.log(student2.name, "-", student2.summary());
