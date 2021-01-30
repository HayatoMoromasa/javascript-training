//▼配列を展開する
const arr1 = [1,2];
console.log(arr1);
//出力[1,2]

//スプレッド構文で...
console.log(...arr1);
//出力1 2

const sum = (num1, num2) => console.log(num1 + num2);
sum(arr1[0],arr1[1]);
//出力3

//スプレッド構文で...
sum(...arr1);
//出力3
//sum(arr1[0],arr1[1])と同じように順番に展開する


//▼一つにまとめる使い方
const arr2 = [1,2,3,4,5,6];
const [num1, num2, ...arr3] = arr2;
console.log(num1);//出力1
console.log(num2);//出力2
console.log(arr3);//出力[3,4,5,6]

//▼配列のコピーと結合
const arr4 = [1,2];
const arr5 = [3,4];
//コピー
const arr6 = [...arr4];
console.log(arr6);//出力[1,2]

//※=でコピーを推奨しない理由
const arr7 = arr4;
arr7[0] = 100;//arr4の[1,2]の0番目に100を代入する
console.log(arr7);//出力[100,2]で代入されてるが、、、
console.log(arr4);//出力[100,2]でarr4にも上書きされている
//このように=で配列をコピーすると同じ場所を参照する為、スプレッド構文を使う
//どうするか
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);//出力[100,2]
// console.log(arr4);//出力[1,2]
//これで上書きを防げる


//結合
const arr8 = [...arr4, ...arr5];
console.log(arr8);//出力[1,2,3,4]



