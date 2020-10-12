// const name = "Max";
// let age = 19;
// const hasHobbies = true;

// age = 30;

// const summarizeUser = (userName, userAge, userHasHobby) => { //arrow function
//     return ('Name is ' + userName + ", age is " + userAge + " and user has hobbies: " + userHasHobby);
// };

// function summarizeUser(userName, userAge, userHasHobby) {
//     return ('Name is ' + userName + ", age is " + userAge + " and user has hobbies: " + userHasHobby);
// }

// console.log(summarizeUser(name, age, hasHobbies));

// console.log(name);

const person = {
    name: 'Taylor',
    age: 29,
    greet: function () {
        console.log('hi, I am ' + this.name) //having arrow refers to the global scope, must use function. 
    }
};

const printName = ({ name, age }) => {
    console.log(name, age);
}

printName(person);

const { name, age } = person;
console.log(name, age);
// person.greet();

// console.log(person);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies)

// hobbies.push('Programming');
// console.log(hobbies);

// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => {
//     return args;
// };

// console.log(toArray(1, 2, 3, 4, 5));


