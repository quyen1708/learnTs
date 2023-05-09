"use strict";
/*
Never: không bao giờ trả ra giá trị. promose!

Kiểu dữ liệu Never đc dùng khi chúng ta 'chắc chắn' rằng 1 điều gì đó không bao giờ xảy ra. (k cần trả ra kết quả)
*/
function handleException(msg) {
    throw Error(msg);
}
function runInfinity() {
    // while (true) {
    //     console.log('running')
    // }
}
// handleException('Test error');
let a = handleException('aaaa');
console.log(">>> check a = ", a);
