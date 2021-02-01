//▼オブジェクトを取り出す
const products = [
    { name: 'banana', type: 'fruits'},
    { name: 'radish' ,type: 'vegetables'},
    { name: 'apple', type: 'fruits'},
    { name: 'broccoli' ,type: 'vegetables'},
];

//・forループで表現する場合
let filteredProducts = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].type === 'fruits') {
        filteredProducts.push(products[i]);
    }
}
console.log(filteredProducts);
// 0: {name: "banana", type: "fruits"}
// 1: {name: "apple", type: "fruits"}
console.log(products)
// 0: {name: "banana", type: "fruits"}
// 1: {name: "radish", type: "vegetables"}
// 2: {name: "apple", type: "fruits"}
// 3: {name: "broccoli", type: "vegetables"}
//なぜ新しい空の配列を用意するのか？→
//チェックボックス等データを元に戻したいケースで、元あるデータに手を加えると元に戻すのが大変になる。
//なので新しい配列を作って基本は元のデータを変化させない(mutateさせない)手法とるべき。

//・filterで表現する場合
const filteredFruits = products.filter((product) => {
    return product.type === 'fruits'
})
//returnがないと判断ができないのでfalseが返る

console.log(filteredFruits)
// 0: {name: "banana", type: "fruits"}
// 1: {name: "apple", type: "fruits"}



const numArr = [1,2,3,4,5];
//▼配列を取り出す
const newNumArr = numArr.filter((num)=> {
    return  num % 2 === 0;
})

console.log(newNumArr);
//[2,4]





