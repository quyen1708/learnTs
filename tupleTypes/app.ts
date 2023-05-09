let skills: (string | number)[] = ['nghiem quyen', 25];

// kieu tuple: dataType/sie/order
let skills2: [string, number] = ['nghiem quyen', 25];
// let skills3: [string, number, boolean] = [25, true, 'abc']; // errror

let skills3: [string, number, boolean?] = ['25', 12]; // boolean là optional, có thể có hoặc không, optional để ở cuối.