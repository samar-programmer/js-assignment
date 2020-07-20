const student = { 
    name : 'Helsinki',
    age:'24',
    projects:{
        dicegame:'Two player dice game using javascript',
        },

};


console.log('Destructuring object');
console.log(student.name);
console.log(student.age);
console.log(student.projects.dicegame);

console.log('Another Way to destructuring object');
console.log({name,age,projects}=student);