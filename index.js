// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(() => {
//     console.log(4);
// }, 1000)
// console.log(5);

// // setInterval(() =>{
// //     console.log('hello');
// // })

// function httpGetAsync(url, callbacks) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function () {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callbacks(xmlHttp);
//     };

//     xmlHttp.open("GET", url, true);
//     xmlHttp.send(null);
// }

// httpGetAsync('https://picsum.photos/200/300', function (response) {
//     document.getElementById('image').src = response.responseURL;

//     httpGetAsync('https://picsum.photos/200/300', function (response) {
//         document.getElementById('image2').src = response.responseURL;

//         httpGetAsync('https://picsum.photos/200/300', function (response) {
//             document.getElementById('image3').src = response.responseURL;
//         });
//         httpGetAsync('https://picsum.photos/200/300', function (response) {
//             document.getElementById('image4').src = response.responseURL;
//         });
//         httpGetAsync('https://picsum.photos/200/300', function (response) {
//             document.getElementById('image5').src = response.responseURL;
//         });
//         httpGetAsync('https://picsum.photos/200/300', function (response) {
//             document.getElementById('image6').src = response.responseURL;
//         });
//         httpGetAsync('https://picsum.photos/200/300', function (response) {
//             document.getElementById('image7').src = response.responseURL;
//         });
//         httpGetAsync('https://picsum.photos/200/300', function (response) {
//             document.getElementById('image8').src = response.responseURL;
//         });
//         httpGetAsync('https://picsum.photos/200/300', function (response) {
//             document.getElementById('image9').src = response.responseURL;
//         });
//         httpGetAsync('https://picsum.photos/200/300', function (response) {
//             document.getElementById('image10').src = response.responseURL;
//         });

//     });
// });

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Done');
//     });
// });

// myPromise.then((result) => {
//     console.log(result);
// }, (error) => {
//     console.log(error);
// });

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('i have get image from server');
//     },2000);
//     setTimeout (() => {
//         reject('i have not get image from server');
//     }, 1000);

// });
// console.log(myPromise);
// myPromise.then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });
// const myPromise = new Promise((resolve, reject) => {
//     resolve('Promise was resole');
// });
// function apiCall1(result) {
//     return new Promise((resolve, reject) => {
//         console.log('value1');
//         resolve('value1');
//     });
// }
// function apiCall2(result) {
//     return new Promise((resolve, reject) => {
//         console.log('value2');
//         resolve('value2');
//     });
// }
// myPromise.then(result => console.log(result))
//     .then(apiCall1)
//     .then(apiCall2)
//     .then(result => console.log('done!'));


// function downloadFile(url) {
//     return new Promise((resolve, reject) => {
//         $.get(url, (data, status) => {
//             if (status === 'success')
//                 resolve(data);
//             else
//                 reject(status);
//         })
//     });
// }
// function downloadAll() {
//     downloadFile('index.html')
//         .then((data) => {
//             console.log('Tải xong index.html');
//             return downloadFile('style.css');
//         })
//         .then((data) => {
//             console.log('Tải xong style.css');
//             return downloadFile('script.js');
//         })
//         .then((data) => {
//             console.log('Tải xong script.js');
//         })
// }
// downloadAll();

// async function downloadAll() {
//     // Các biển f1, f2, f3 là data tải được
//     let f1 = await downloadFile('index.html');
//     console.log('Tải xong index.html');
//     let f2 = await downloadFile('style.css'); console.log('Tải xong style.css');
//     let f3 = await downloadFile('script.js'); console.log('Tải xong script.js');
// }
// downloadAll();

// let promise1 = new Promise(
//     (resolve,reject) => setTimeout(()=> resolve(10),100));
// let promise2 = new Promise(
//     (resolve,reject) => setTimeout(()=> resolve(20),200));
// let promise3 = new Promise(
//     (resolve,reject) => setTimeout(()=> resolve(30),300));

// Promise.all([promise1,promise2,promise3])
// .then(resolve => console.log(resolve));


// let promisel = new Promise((resolve, reject) => {
//     setTimeout(() => { reject('Error 1'); }, 100);
// });
// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => { reject('Error 2'); }, 200);
// });
// let promise3 = new Promise((resolve, reject) => {
//      setTimeout(() => { reject('Error 3'); }, 10);
// });
// Promise.all([promise1, promise2, promise3])
//     .then(console.log).catch(console.log);
   //callbacks
// function httpGetAsync(url, callbacks) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function () {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callbacks(xmlHttp);
//     };

//     xmlHttp.open("GET", url, true);
//     xmlHttp.send(null);
// }

// const promise1 = new Promise((resolve, reject) => {
//     httpGetAsync('https://picsum.photos/200/300', function (response) {
//         resolve(response);
//     });
// })

// const promise2 = new Promise((resolve, reject) => {
//     httpGetAsync('https://picsum.photos/200/300', function (response) {
//         resolve(response);
//     });
// })

// const promise3 = new Promise((resolve, reject) => {
//     httpGetAsync('https://picsum.photos/200/300', function (response) {
//         resolve(response);
//     });
// })

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     const [response1, response2, response3] = values;
//     document.getElementById('image').src = response1.responseURL;
//     document.getElementById('image2').src = response2.responseURL;
//     document.getElementById('image3').src = response3.responseURL;
// })

setTimeout(function(){
    console.log('số 1')
},3000)
console.log('số 2');
setTimeout(function(){
    console.log('số 3')
},0)

console.log('số 4');