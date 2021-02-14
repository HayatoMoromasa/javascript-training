promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    },3000)
});


promise
    .then(() => console.log('処理したよ'))
    .then(() => console.log('ここもだよ'))
    .catch(() => console.log('あかんかったわ'))

//※3秒後に
//処理したよ
//ここもだよ
//setTimeoutの中をreject()にすると、「あかんかったわ」が同じく3秒後にでる

