//例1
//合計を求める
const numbers = [ 10, 20, 30 ];
let sum = 0;

//for文なら…
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);
//60


//reduce
//sumに初期値の0をいれている
const sumByReduce = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0)

console.log(sumByReduce)
//60


//例2
//['red', 'yellow', 'blue']の配列を作る
//mapを使えばすぐできるがreduceを使ってやってみる

const primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
];

//mapの場合
// const color = primaryColors.map((item)=> {
//     return item.color;
// })
// console.log(color);
//もしくは
// const color = primaryColors.map((item)=> item.color);
// console.log(color)


//reduceの場合
//※acc → accumulator:蓄積するもの的な
const color = primaryColors.reduce(function(acc, primaryColor) {
    acc.push(primaryColor.color)
    return acc;
}, []);
console.log(color);
//配列にpushしてるのでミューテート(変化加える)してるやんとなるかもしれないが、
//これはreduceメソッド内で行われてる話だし、accは外で使えないので、
//メソッド内ではミューテートしてもいいというポリシーの元の書き方


