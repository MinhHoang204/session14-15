class Student5 {
    id: number;
    name: string;
    enrolledCourses: Course[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }

    enroll(course: Course) {
        this.enrolledCourses.push(course);
    }
}

class Instructor {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    createCourse(title: string): Course {
        return new Course(title, this);
    }

    createLesson(course: Course, title: string): Lesson {
        return new Lesson(title, course);
    }

    createAssignment(lesson: Lesson, title: string): string {
        return title;
    }

    createAssessment(course: Course, title: string): string {
        return title;
    }
}

class Course {
    title: string;
    instructor: Instructor;
    lessons: Lesson[];
    assessments: string[]; 

    constructor(title: string, instructor: Instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
}

class Lesson {
    title: string;
    assignments: string[]; 
    constructor(title: string, course: Course) {
        this.title = title;
        this.assignments = [];
        course.lessons.push(this);
    }
}

const instructor1 = new Instructor(1, "John Doe");
const course1 = instructor1.createCourse("Introduction to Programming");
const lesson1 = instructor1.createLesson(course1, "Variables and Data Types");
const assignment1 = instructor1.createAssignment(lesson1, "Write a simple program");
const assessment1 = instructor1.createAssessment(course1, "Midterm Exam");

const Studentt = new Student5(101, "Alice");
Studentt.enroll(course1);
console.log(Studentt.enrolledCourses);