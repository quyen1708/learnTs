/*
let greet: Function;

greet = () => {
    console.log('hello')
}

const add = (a: number, b:number, d: string = 'aa', c?: number | string): void => {
    console.log(a + b);
    console.log(c)
    d = 'bb'
    console.log(d)
}
add(3, 4)

const minus = (a: number, b: number): number => {
    return a + b
}

let result = minus(10, 4)

console.log('result is ')
console.log(result)

type StringOrNum = string | number;
const logDetail = (uuid: StringOrNum, item: string) => {
    console.log(`${item} has the uuid is ${uuid}`)
}
type objWithName = {
    name: string,
    uuid: StringOrNum
}
const greet2 = (user: objWithName) => {
    console.log(`${user.name} say hello`)
}
const user2 = {
    name: 'quyen',
    age: 23
}
greet2({name: 'quyen', uuid: 23})

let calc : (a: number, b: number, c:string) => number;

calc = (num1: number, num2: number, action: string) => {
    if (action === 'add') {
        return num1 + num2;
    } else {
        return  num1 - num2;
    }
}

let logDetails: (obj: {name: string, age: number}) => void

type person = {name: string, age: number}

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}*/
