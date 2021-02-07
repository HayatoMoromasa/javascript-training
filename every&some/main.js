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

