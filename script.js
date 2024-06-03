const courses = ['Mathematics',  'English Language', 'Physics', 'Chemistry', 'Biology', 'Computer Science'];

// Function to display courses
function displayCourses() {
    const courseList = document.getElementById('courseList');
    courses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = course;
        courseList.appendChild(li);
    });
}
displayCourses();

// Variables to concatenate
const firstName = 'Patrick';
const lastName = 'Sawyer';
const fullName = firstName + ' ' + lastName;
document.getElementById('concatenatedVariables').textContent = 'Full Name: ' + fullName;

// Object
const student = {
    name: 'Olivia Smith',
    age: 19,
    major: 'Mathematics'
};
const objectDisplay = document.getElementById('objectDisplay');
objectDisplay.textContent = `Name: ${student.name}, Age: ${student.age}, Major: ${student.major}`;

const grades = [90, 85, 88, 92, 76];
function displayGrades() {
    const arrayDisplay = document.getElementById('arrayDisplay');
    grades.forEach(grade => {
        const li = document.createElement('li');
        li.textContent = grade;
        arrayDisplay.appendChild(li);
    });
}
displayGrades();

// Function to be called by button
function calculateAverage() {
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length;
}

// Function to display the result of the button click
function showFunctionResult() {
    const result = calculateAverage();
    document.getElementById('functionResult').textContent = 'Average Grade: ' + result;
}