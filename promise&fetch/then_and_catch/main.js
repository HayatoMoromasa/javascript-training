promiseResolve = new Promise((resolve, reject) => {
    resolve();
});
console.log(promiseResolve);
//Promise {<fulfilled>: undefined}

//▼Promiseの状態がresolveだとthenに処理が移る
promiseResolve
    .then(() => console.log('処理完了'))
    .then(() => console.log('ここも処理されるで'))
    .catch(() => console.log('問題発生'))
//処理完了
//ここも処理されるで



//▼Promiseの状態がrejectだとcatchに処理が移る
promiseReject = new Promise((resolve, reject) => {
    reject();
});
console.log(promiseReject);

promiseReject
    .then(() => console.log('処理完了'))
    .then(() => console.log('ここも処理されるで'))
    .catch(() => console.log('問題発生'))
//問題発生


