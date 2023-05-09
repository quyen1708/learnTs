import  {Invoice} from './classes/Invoice.js'
import  {Payment} from './classes/Payment.js'
import  {HasFormatter} from "./interfaces/HasFormatter.js";
import {ListTemplate} from "./classes/ListTemplate.js";

interface IsPerson {
    name: string,
    age: number,
    speak(a: string): void,
    spend(a: number): number,
}

const me: IsPerson = {
    name: 'quyen',
    age: 30,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log('I spent ', amount)
        return amount;
    }
};

console.log(me)

const greetPerson = (person: IsPerson) => {
    console.log('Hello ', person.name)
}

greetPerson(me);

// //classes
// class Invoice {
//     // readonly client: string;
//     // private details: string;
//     // public amount: number;
//     //
//     // constructor(c: string, d: string, a: number) {
//     //     this.client = c;
//     //     this.details = d;
//     //     this.amount = a;
//     // }
//     constructor(
//         readonly client: string,
//         private details: string,
//         public amount: number
//     ) {}
//
//     format() {
//         // this.client = 'something else'
//         return `${this.client} owes $${this.amount} for ${this.details}`
//     }
// }
// const anchor = document.querySelector('a')!; // ! mean anchor can be null
// console.log(anchor.href)

// const form = document.querySelector('form')!;

let doc1: HasFormatter;
let doc2: HasFormatter;

doc1 = new Invoice('quyen', 'web work', 200);
doc2 = new Payment('Thanh', 'web dev', 250);

let docs: HasFormatter[] = [];
docs.push(doc1);
docs.push(doc2);
console.log(docs)

const  inv1 = new Invoice('Quyen', 'Developer heyhi', 100);
const  inv2 = new Invoice('Thanh', 'Developer heyhi', 200);

// inv1.client = 'Tu'

console.log(inv1 , inv2);

let invoices: Invoice[] = [];
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})


const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#toFrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// list template instance

const  ul = document.querySelector('ul')!
const list = new ListTemplate(ul)


form.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    let doc: HasFormatter;
    let values: [string, string, number] //Kiểu tuples: kiểu dữ liệu ở mỗi dữ liệu là cố định
    values = [toFrom.value, details.value, amount.valueAsNumber]
    if (type.value === 'invoice') {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }

    console.log(doc)

    list.render(doc, type.value, 'end')


    // console.log(
    //     type.value,
    //     toFrom.value,
    //     details.value,
    //     amount.value
    // )
})

//Generics

// const addUid = <T>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100)
//     return {...obj, uid};
// }
//
// let doc3 = addUid({name: 'quyen', age: 40})
//
// let doc2 = addUid('hello') // -> vẫn được

// const addUid = <T extends object>(obj: T) => {  // exten object bắt dữ liệu truyện vào đc cụ thể hơn -> code 143 lỗi
//     let uid = Math.floor(Math.random() * 100)
//     return {...obj, uid};
// }
//
// let doc3 = addUid({name: 'quyen', age: 40})

// let doc2 = addUid('hello') // -> lỗi

const addUid = <T extends {name: string}>(obj: T) => {  // hoặc có th như này
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid};
}

let doc3 = addUid({name: 'quyen', age: 40})
// let doc3 = addUid({name: 22, age: 40}) // lỗi

console.log(doc3)
console.log(doc3.name)

//generics with interface

enum ResourceType {Book, Author, Film, Director, Person}

interface Resource<T> {
    uid: number;
    resourceType: ResourceType
    resourceName: string;
    data: T //Data có thể là bất cứ kiểu dữ liệu gĩ
}

const doc4: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.Book,
    resourceName: 'Member List',
    data: {name: 'Thanh'}
}

const doc5: Resource<string[]> = {
    uid: 2,
    resourceType: ResourceType.Author,
    resourceName: 'Shopping List',
    data: ['bread', 'milk']
}
console.log(doc4, doc5)