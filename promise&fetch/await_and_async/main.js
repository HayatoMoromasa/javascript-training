function sleep(val) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log(val++);
            resolve(val);
        },1000);
    });
}

async function init() {
    let val = await sleep(0);
    val = await sleep(val);
    val = await sleep(val);
    val = await sleep(val);
    val = await sleep(val);
    val = await sleep(val);
    val = await sleep(val);
    console.log(val)
}

init();
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
