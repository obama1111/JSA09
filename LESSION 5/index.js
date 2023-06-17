//Lưu dữ liệu vào local storage
// localStorage.setItem("key", "value");
// localStorage.setItem("name","ber")
// localStorage.setItem("Age", 20)

// Lấy dữ liệu từ local storage
// localStorage.getItem("key")
// const Username = localStorage.getItem("name")
// console.log(Username);
// const age = localStorage.getItem("Age");
// console.log(age);

// Xóa dữ liệu local storage
// localStorage.removeItem(key)
// LocalStorage.clear() --> xóa tất cả các key 
// localStorage.removeItem("Age")
// localStorage.clear()

// thay đổi kiểu dữ liệu lấy ra từ Local storage
// ageConverted = Number(age)
// console.log(ageConverted + 20);

// const arr = [1,2,3,4,5];
// const obj = {
//     name: "ber",
//     age: 17
// };
// // JSON.stringify(arr) => chuyển mảng thành chuỗi
// // JSON.stringify(obj) => chuyển object thành chuỗi
// localStorage.setItem("arr", JSON.stringify(arr));
// localStorage.setItem("obj", JSON.stringify(obj));


// const arrFromLS = JSON.parse(localStorage.getItem("arr"))// chuyển chuỗi thành mảng
// const objFromLS = JSON.parse(localStorage.getItem("obj"))// chuyển chuỗi thành object
// console.log(arrFromLS);
// console.log(objFromLS);



;
const myUser = document.getElementById("Text");
const myEmail = document.getElementById("email")
const login = document.getElementById("login");
login.addEventListener("submit",function (e) {
    e.preventDefault();

    
    const email = myEmail.value;
    const user = myUser.value;

    localStorage.setItem("email", email)
    localStorage.setItem("user", user)
    
})
