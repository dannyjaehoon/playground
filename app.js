// 1
// var x = 15;
// if (x > 10 && x < 20) {
//   console.log(x);
// }

// 2
// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (var i = 0; i < array.length; i++) {
//   if (!(array[i] % 2)) console.log(array[i]);
// }

// 3
// let str = '';
// for (var i = 0; i < array.length; i++) {
//   if (!(array[i] % 2)) str += array[i] + '';
// }
// console.log(str);

// 4
// for (var i = array.length - 1; i >= 0; i--) {
//   if (array[i] % 2 === 1) console.log(array[i]);
// }

// 5
// let i = 0;
// while (i < array.length) {
//   if (array[i] % 2 === 0) {
//     console.log(array[i]);
//   }
//   i++;
// }

// 6
// let i = array.length;
// while (i > 0) {
//   if (array[i] % 2 === 1) console.log(array[i]);
//   i--;
// }

// 7
// let sum = 0;
// for (var i = 0; i < array.length; i++) {
//   sum += array[i];
// }
// console.log(sum);

// 8
// const array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// let sum = 0;
// for (var i = 0; i < array1.length; i++) {
//   if ((array1[i] % 2) && (array1[i] % 3)) {
//     console.log(array1[i]);
//     sum += array1[i];
//   }
// }
// console.log(sum);

// 9
// const array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// let sum = 0;
// for (var i = 0; i < array1.length; i++) {
//   if ((array1[i] % 2 === 0) || (array1[i] % 3 === 0)) {
//     sum += array1[i];
//   }
// }
// console.log(sum);

// 10
// const array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// for (var i = 0; i < 6; i++) {
//   for (var j = 0; j < 6; j++) {
//     if (i + j === 6) console.log(`[ ${i}, ${j} ]`);
//   }
// }

// 11
// var star = '';
// for (var i = 0; i < 5; i++) {
//   for (var j = i; j < i + 1; j++) {
//     star += '*';
//   }
//   console.log(star);
// }

// 12
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j < 5; j++) {
//     if (i < j + 1) {
//       star += '*';
//     } else {
//       star += ' ';
//     }
//   }
//   console.log(star);
//   star = '';
// }

// 13
// for (var i = 0; i < 5; i++) {
//   for (var j = i; j < 5; j++) {
//     star += '*';
//   }
//   console.log(star);
//   star = '';
// }

// 14
// for (var i = 0; i < 5; i++) {
//   for (var j = 5; j > 0; j--) {
//     if (i >= j - 1) {
//       star += '*';
//     } else {
//       star += ' ';
//     }
//   }
//   console.log(star);
//   star = '';
// }

// 15
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j < 5 + i; j++) {
//     if (i > 3 - j) {
//       star += '*';
//     } else {
//       star += ' ';
//     }
//   }
//   console.log(star);
//   star = '';
// }

// 16
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j < 10 - i; j++) {
//     if (i < j) {
//       star += '*';
//     } else {
//       star += ' ';
//     }
//   }
//   console.log(star);
//   star = '';
// }
