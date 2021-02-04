const users = [
    { name: 'ken' },
    { name: 'lisa' },
    { name: 'bob' }
];


//forループの場合
// let user;

// for (let i = 0; i < users.length; i++) {
//     if(users[i].name === 'bob'){
//         user = users[i];
//         break;
//     }
// }

// console.log(user);
//{name: "bob"}


//findの場合
let user;

const bob = users.find(function(user) {
    return user.name === 'bob';
});

console.log(bob);
//{name: "bob"}

