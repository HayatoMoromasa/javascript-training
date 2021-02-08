const computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32  },
];


//16GB ramが必要なソフト


//すべて条件を満たすかどうか
const fourOrMore = computers.every(function(computer){
    return computer.ram >= 4;

});
console.log(fourOrMore);
//true


//一つでも条件を満たすかどうか
const sixteenOrMore = computers.some(function(computer){
    return computer.ram >= 16;
})
console.log(sixteenOrMore);
//true


//sample

const names = [
    "Steve Jobs",
    "Mark Zuckerberg",
    "Jeff Bezos",
    "Larry page"
]

const everything10 = names.every((name) => {
    return name.length === 10;
})

console.log(`全部10文字: ${everything10}`);
//全部10文字: false



const justOne15 = names.some((name) => {
    return name.length === 15;
})

console.log(`1個だけ15文字がある: ${justOne15}`);
//1個だけ15文字がある: true



const nameLength = names.forEach((name)=> {
    console.log('each character is ',name.length)
});
//each character is  10
//each character is  15
//each character is  10
//each character is  10
