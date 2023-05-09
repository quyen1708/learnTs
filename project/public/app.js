import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from "./classes/ListTemplate.js";
const me = {
    name: 'quyen',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    }
};
console.log(me);
const greetPerson = (person) => {
    console.log('Hello ', person.name);
};
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
let doc1;
let doc2;
doc1 = new Invoice('quyen', 'web work', 200);
doc2 = new Payment('Thanh', 'web dev', 250);
let docs = [];
docs.push(doc1);
docs.push(doc2);
console.log(docs);
const inv1 = new Invoice('Quyen', 'Developer heyhi', 100);
const inv2 = new Invoice('Thanh', 'Developer heyhi', 200);
// inv1.client = 'Tu'
console.log(inv1, inv2);
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let values; //Kiểu tuples: kiểu dữ liệu ở mỗi dữ liệu là cố định
    values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    console.log(doc);
    list.render(doc, type.value, 'end');
    // console.log(
    //     type.value,
    //     toFrom.value,
    //     details.value,
    //     amount.value
    // )
});
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
const addUid = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc3 = addUid({ name: 'quyen', age: 40 });
// let doc3 = addUid({name: 22, age: 40}) // lỗi
console.log(doc3);
console.log(doc3.name);
//generics with interface
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Book"] = 0] = "Book";
    ResourceType[ResourceType["Author"] = 1] = "Author";
    ResourceType[ResourceType["Film"] = 2] = "Film";
    ResourceType[ResourceType["Director"] = 3] = "Director";
    ResourceType[ResourceType["Person"] = 4] = "Person";
})(ResourceType || (ResourceType = {}));
const doc4 = {
    uid: 1,
    resourceType: ResourceType.Book,
    resourceName: 'Member List',
    data: { name: 'Thanh' }
};
const doc5 = {
    uid: 2,
    resourceType: ResourceType.Author,
    resourceName: 'Shopping List',
    data: ['bread', 'milk']
};
console.log(doc4, doc5);
