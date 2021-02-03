const colors = ['red', 'blue', 'yellow'];

//従来のfor文
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//forEach
colors.forEach(function(color) {
    console.log(color);
})
//アロー関数で
colors.forEach((color) => {
    console.log(color);
})

//出力
//red
//blue
//yellow



//▼forEachに関数もいれれる例
//配列用意
const numbers = [1,2,3,4,5];

//合計を保持する変数を用意
let sum = 0;

function adder(number) {
    sum += number;
}
//配列の一つ一つの数字を合計に足す
numbers.forEach(adder);

//合計を表示
console.log(sum)
//15
