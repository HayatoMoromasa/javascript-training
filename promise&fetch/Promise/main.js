const promisePending = new Promise(() => {});
console.log(promisePending)
//保留中
//Promise {<pending>}

const promiseResolve = new Promise((resolve, reject) => {
    resolve();
});
console.log(promiseResolve);
//成功した状態
//Promise {<fulfilled>: undefined}


const promiseReject = new Promise((resolve, reject) => {
    reject();
})
console.log(promiseReject);
//失敗した状態
//Promise {<rejected>: undefined}
//Uncaught (in promise) undefined

