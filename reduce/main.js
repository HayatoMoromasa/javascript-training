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


//例3 <>の数と向きが左右対称かを確かめたいとき(><はNG)
function balancedBracket(string){
    return !string.split('').reduce(function(previous,char){
        if ( previous < 0 ) { return previous; }
        if ( char === '<') { return previous + 1; }
        if ( char === '>' ) { return previous - 1; }
    },0)
}
console.log(balancedBracket('<>'))
//true
console.log(balancedBracket('<>>'))
//false
console.log(balancedBracket('><'))
//false


//例4　走行距離を求める
const trips = [
    { distance: 34 },
    { distance: 60 },
    { distance: 20 }
];


const totalDistance = trips.reduce((sum,trip)=>{
    return trip.distance + sum;
},0)

console.log(totalDistance);
//114


//例5 職場の通常のデスク(sitting)とスタンディングデスク(standing)の数を集計
//結果は{ sitting: x, standing: y}の形にする

const desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'standing' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];

const deskTypes = desks.reduce((sum, desk) => {
    if(desk.type === 'sitting') {
        sum.sitting ++;
    } else {
        sum.standing ++;
    }
    return sum;
},{ sitting: 0, standing: 0 });
console.log(deskTypes);
//{sitting: 5, standing: 5}
