function createStudent(name, lastName, yearOfBirth) {
    const grades = [];
    const attendance = new Array(25).fill(null);
    let attendanceIndex = 0;

    function addGrade(grade) {
        grades.push(grade);
    }

    function getGPA() {
        if (grades.length === 0) return 0;
        const sum = grades.reduce((a, b) => a + b, 0);
        return sum / grades.length;
    }

    function present() {
        if (attendanceIndex >= 25) return;
        attendance[attendanceIndex++] = true;
    }

    function absent() {
        if (attendanceIndex >= 25) return;
        attendance[attendanceIndex++] = false;
    }

    function summary() {
        const gpa = getGPA();
        const filled = attendance.filter(a => a !== null);
        const presentCount = filled.filter(a => a === true).length;
        const attendanceRate = filled.length > 0 ? presentCount / filled.length : 0;

        if (gpa > 90 && attendanceRate > 0.9) return "Great job!";
        else if (gpa > 90 || attendanceRate > 0.9) return "Not bad, but you can do better.";
        else return "Tomato!";
    }

    return {name, lastName, yearOfBirth, addGrade, getGPA, present, absent, summary};
}

const student3 = createStudent('John', 'Smith', 1990);
const student4 = createStudent('Peter', 'Lens', 1997);
const student5 = createStudent('Mary', 'Clark', 1995);

student3.addGrade(100);
student4.addGrade(95);
student5.addGrade(93);
for (let i = 0; i < 23; i++) student3.present();
for (let i = 0; i < 2; i++) student3.absent();

student4.addGrade(90);
student4.addGrade(85);
student4.addGrade(90);
for (let i = 0; i < 20; i++) student4.present();
for (let i = 0; i < 2; i++) student4.absent();

student5.addGrade(60);
student5.addGrade(55);
student5.addGrade(45);
for (let i = 0; i < 25; i++) student5.absent();

console.log(student.name, "-", student3.summary());
console.log(student1.name, "-", student4.summary());
console.log(student2.name, "-", student5.summary());
