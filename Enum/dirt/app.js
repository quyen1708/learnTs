"use strict";
var API_STATUS;
(function (API_STATUS) {
    API_STATUS[API_STATUS["PENDING"] = 0] = "PENDING";
    API_STATUS[API_STATUS["SUCCESS"] = 1] = "SUCCESS";
    API_STATUS[API_STATUS["REJECTED"] = 2] = "REJECTED"; //PROMISE
})(API_STATUS || (API_STATUS = {}));
let a1 = API_STATUS.SUCCESS;
let a2 = API_STATUS.REJECTED;
console.log(">>>a1 = ", a1, " a2 = ", a2);
