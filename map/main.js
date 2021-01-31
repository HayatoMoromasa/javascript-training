const nameArr = ["apple", "banana", "lemon"];

//▼基本的な構文

//returnされた結果に基づいて新しい配列を生成する使い方
const nameArr2 = nameArr.map((name)=> {
    return name;
})

console.log(nameArr2);
//["apple", "banana", "lemon"]


//配列をループさせてなにか処理する使い方
nameArr.map((name)=> console.log(name));
//apple
//banana
//lemon


//オブジェクトの配列から指定した値だけを引き抜く使い方
const images = [
    { width: '10px', height: '20px'},
    { width: '20px', height: '30px'},
    { width: '30px', height: '40px'},
];

const width = images.map(function(image){
    return image.width;
})

console.log(width);
//["10px","20px","30px"]


//〜番目は〜ですの使い方
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));
//1番目はappleです
//2番目はbananaです
//3番目はlemonです

//条件分岐の使い方
const newNameArr = nameArr.map((name) => {
    if (name === "apple") {
        return `${name}食べた`
    } else {
        return `${name}食べたい`
    }
})

console.log(newNameArr);
//["apple食べた", "banana食べたい", "lemon食べたい"]
