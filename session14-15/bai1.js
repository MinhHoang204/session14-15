"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }

    enroll(course) {
        this.enrolledCourses.push(course);
    }
}

class Instructor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    createCourse(title) {
        return new Course(title, this);
    }

    createLesson(course, title) {
        return new Lesson(title, course);
    }

    createAssignment(lesson, title) {
        return title;
    }

    createAssessment(course, title) {
        return title;
    }
}

class Course {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
}

class Lesson {
    constructor(title, course) {
        this.title = title;
        this.assignments = [];
        course.lessons.push(this);
    }
}

// Example usage:
const instructor1 = new Instructor(1, "John Doe");
const course1 = instructor1.createCourse("Introduction to Programming");
const lesson1 = instructor1.createLesson(course1, "Variables and Data Types");
const assignment1 = instructor1.createAssignment(lesson1, "Write a simple program");
const assessment1 = instructor1.createAssessment(course1, "Midterm Exam");

const student1 = new Student(101, "Alice");
student1.enroll(course1);
console.log(student1.enrolledCourses);