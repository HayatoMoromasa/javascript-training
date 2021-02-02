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



//▼複数条件の絞り込み
//例1
const people = [
    { name: 'ken', gender: 'male', age: 25, area: 'japan'},
    { name: 'bob', gender: 'male', age: 20, area: 'usa'},
    { name: 'sarah', gender: 'female', age: 28, area: 'france'},
    { name: 'kim', gender: 'male', age: 30, area: 'korea'},
    { name: 'joanah', gender: 'female', age: 22, area: 'philippines'},
]

const filteredPeople = people.filter((person) => {
    return person.gender === 'male'
            && person.age > 20
            && person.area === 'japan'
});

const filteredPeople2 = people.filter((person) => {
    return person.age > 30  || person.area === 'china'
})

console.log(filteredPeople);
//[{ name: 'ken', gender: 'male', age: 25, area: 'japan'}]
console.log(filteredPeople2);
//[]が返る


//▼紐付いた対象を絞り込む
const post = { id: 1, title: '初投稿で〜す'};
const comments = [
    { postId: 1,  content: 'いい記事やん' },
    { postId: 2,  content: '手抜き?' },
    { postId: 1,  content: 'こんちは' },
];

//idとpostIdを紐付ける
//引数には対象となるpostと、抜き取りたいcommentsが入る
function commentsForPost(post, comments) {
    return comments.filter((comment) => {
        return comment.postId === post.id;
    });
}

console.log(commentsForPost(post, comments));
//[{postId: 1, content: "いい記事やん"},
//{postId: 1, content: "こんちは"}]が返る
