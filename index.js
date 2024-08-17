#!/usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("welcome!");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "whom would you like to interact with?",
            choices: ["staff", "student", "exit"]
        });
        if (ans.select == "staff") {
            console.log("you approach the staff room,please feel free to ask any question.");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "enter the students name you wish to engage with:",
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`hello i am ${name.name}.nice to meet you!`);
                console.log("new student added");
                console.log("current student list:");
                console.log(persons.students);
            }
            else {
                console.log(`hello i am ${student.name}.nice to meet you!`);
                console.log("existing student list:");
                console.log(persons.students);
            }
        }
        else if (ans.select == "exit") {
            console.log("exiting the program...");
            process.exit();
        }
    } while (true);
};
programStart(persons);
