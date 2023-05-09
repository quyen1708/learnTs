/*
let character = 'abc'

console.log(character)

const inputs = document.querySelectorAll('input')

console.log(inputs)

inputs.forEach(input => {
    console.log(input)
})

let age = 30;

let isFemale = false;

// character = 20; //lỗi

character = 'Maria';

const  circ = (diameter: number) => {
    return diameter * Math.PI
}

console.log( circ(5))

// arrays
let names = ['quyen', 'thanh', 'phuong']

names.push('tu');

// names.push(12); //lỗi

let numbers = [12, 13, 14, 15]
// numbers.push('aaa') // lỗi
numbers.push(16)

let mixed = ['quyen', 12, false, 0];

mixed.push('aaa')
mixed.push(11)

//objects

let admin = {
    name: 'quyen',
    age: 30,
}

admin.age = 40;
// admin.gender = 'male';

// admin = {
//     name: 'quyen',
//     // age: 30,
// } //Lỗi

//explicit types

let character2: string;

let age2: number;
let isLoggedIn: boolean;

age2 = 12;
isLoggedIn = true

// let human2: string[]
// human2.push('ccc')
// lỗi

let human2: string[] = []
human2.push('ccc')

//union Types

let mixed2: (string | number | boolean)[] = [];

mixed2.push('aaa');
mixed2.push(true);
console.log('mixed2')
console.log(mixed2)

let uuid: string | number;
uuid = 'aaa';
uuid = 123;

//object

let human3: object;
human3 = {
    name: 'quyen',
    age: 30
}

let human4: {
    name: string,
    age: number,
    isMale: boolean
}

human4 = {
    name: 'asas',
    age: 21,
    isMale: true,
    // address: 'dsadassad'
}

// any types

let age222: any = 25;

age222 = true
console.log(age222);
age222 = 'dsdads'
console.log(age222);
age222 = {name: 'ssdadsa'}
console.log(age222);

let mixed3: any[] = [];
mixed3.push(3);
mixed3.push('aaa');
mixed3.push(false);
console.log(mixed3)

let human5: {
    name: any,
    age: any
}

human5 = {
    name: 'dsaasd',
    age: 23
}

console.log(human5)*/
