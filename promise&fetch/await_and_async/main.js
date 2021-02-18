// function sleep(val) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             console.log(val++);
//             resolve(val);
//         },1000);
//     });
// }

// async function init() {
//     let val = await sleep(0);
//     val = await sleep(val);
//     val = await sleep(val);
//     val = await sleep(val);
//     val = await sleep(val);
//     val = await sleep(val);
//     val = await sleep(val);
//     console.log(val)
// }

// init();
//1秒ごとに
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
//が出力される
//awaitで受けれるのはPromiseのインスタンス
//asyncが返すのはPromise



//もっと見てみる
//▼async functionの中でPromiseをreturn
//async functionで定義された関数内でPromiseをreturnすると、そのPromiseがそのまま返却される
//だからthen()やcatch()で処理を受けれる
async function rejectFunc() {
    return Promise.reject(new Error('this is error'));
}

rejectFunc().catch(error => console.log(error.message));
//this is error

//▼async functionの中でthrow
//async functionで定義された関数内でthrowされた場合、そのthrowの値でPromise.rejectが実行される
async function throwFunc() {
    throw new Error('error error error---')
}

throwFunc().catch(error => console.log(error.message));
//error error error---
//async functionはPromiseを返すだけの関数
//外部の関数からasync functionを呼ぶときはPromiseを返却する非同期関数と思ってればいい
