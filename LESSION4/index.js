// // // // Vòng lặp for (for, while, for...in, for...of)
// // // --------vòng lặp for
// // // for (
// // //     let i = 0; // khai báo một biến đếm để đếm số lần lặp
// // //     i < 10;  // điều kiện để tiếp tục vòng lặp
// // //     i=i+2) // cập nhật biến đếm
// // //     {
// // //     // phần code lặp lại
// // //     // được phép sử dụng biến i
// // //     // được phép sử dụng các biến đã khai báo trước đó ở ngoài vòng lặp.
// // //     console.log(i);
// // // }

// // // --------  vòng lặp while
// // // let a = 0;
// // // // phần code lặp lại
// // // while (a < 10 ) {
// // //     console.log(a);
// // //     a = a + 1; // cập nhật điều kiện để tiếp tục vòng lặp
// // // }

// // // for...in: lặp qua các key của object;

// // // for...of: lặp qua các phần tử của mảng(array)

// // // let arr = [1,2,3,4,5]
// // // for (const item of arr) { // item là tên biến lưu lại giá trị của phần tử  -- arr là mảng được lặp
// // //     console.log(item);
// // // }


// // // Câu lệnh điều kiện if/else/ else if
// // //--- toán tử ---

// // // toán tử "và": &&
// // // toán tử "hoặc": ||

// // // const point = 7;
// // // if (point >= 8 && point < 10) {
// // //     console.log("HS giỏi");
// // // } else if (point >= 6.5){
// // //     console.log("HS khá");
// // // } else {
// // //     console.log("HS trung bình");
// // // }

// // // Object (đối tượng): lưu trữ thông tin dưới dạng key=value
// // const student1 = { // khai báo 1 object rỗng
// //     //key: value(number, string, boolance, array, object)
// //     name: "Nguyen Van A",
// //     age: 20,
// //     isMale: true,
// //     hobbies: ["basketball", "dance"],
// //     address: {
// //         street: "Nguyen Chi Thanh",
// //         city: "Hanoi"
// //     }
// // }; 

// // const student2 = {
// //     name: "Nguyen Van B",
// //     age: 20,
// //     isMale: true,
// //     hobbies: ["basketball", "dance"],
// //     address: {
// //         street: "Nguyen Chi Thanh",
// //         city: "Hanoi"
// //     }
// // };

// // const students = [student1, student2];
// // for (const std of students) {
// //     //  std là một object học sinh
// //     // truy suất đến các thông tin của học sinh theo key
// //     console.log(std.name);
// //     console.log(std.age);
// //     console.log(std.isMale);
// //     //  cập nhật thông tin của hs
// //     std.name = "Nguyen Van C";
// //     console.log(std.name);
// // }

// //  thuc hanh

// // const products = [
// //     {
// //         name:"Iphone 12"
// //     },
// //     {
// //         name:"Iphone 13"
// //     },
// //     {
// //         name:"Kamen raider decade"
// //     },
// //     {
// //         name:"Samsung Gala cười"
// //     },
// //     {
// //         name:"Kamen raider Ohma Rio"
// //     },
// // ];

// // const inputEl = document.getElementById("search_box");
// // const pEL = document.getElementById("search_result");


// // inputEl.addEventListener("input", function(event){
// //     pEL.innerHTML = "";
    
// //     const searchValue = inputEl.value;
// //     if (searchValue.trim() != ""){
// //         products.forEach((item) => {
// //             if (item.name.toLowerCase().includes(searchValue.trim().toLowerCase())){
// //                 pEL.innerHTML = pEL.innerHTML + item.name + "<br>";
// //             }
// //         })
// //     }

    
// // });

// // test1
// // const Myarr = [0,12,3,5,34,22,66,91,53,109]
// // Myarr.forEach(element => {
// //     if(element % 2 ==0 || element == 0){
// //         console.log(element);
// //     }
// // });

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   } 

// let i = 0;
// while (i < 3){
//     i++;
//     alert(`number ${i}!`);
// }

let Myanwser = []
let Quest1 = prompt('ăn cơm chưa1?', '');
let Quest2 = prompt('ăn cơm chưa2?', '');
let Quest3 = prompt('ăn cơm chưa3?', '');
let Quest4 = prompt('ăn cơm chưa4?', '');
let Quest5 = prompt('ăn cơm chưa5?', '');

Myanwser = [Quest1 + "  " + Quest2 + "  "  +Quest3 + "  "  + Quest4 + "  "  +Quest5]
console.log(Myanwser);
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// if (a == 0){
//     alert("a = " + a);
//     console.log(a);
// } else if (a == 1){
//     alert("a = " + a);
//     console.log(a);
// } else {
//     alert("a= " + a);
//     console.log(a);
// }