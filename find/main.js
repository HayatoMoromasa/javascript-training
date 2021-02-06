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




function Car(model) {
    this.model = model;
}

const cars = [
    new Car('Yaris'),
    new Car('ROOMY'),
    new Car('AQUA')
]

const foundCar = cars.find(function(car){
    return car.model === 'AQUA'
})

console.log(foundCar);
//Car {model:"AQUA"}


const posts = [
    { id: 1, title: '古い投稿' },
    { id: 2, title: '新しい投稿' },
];

const comments = { postId: 2, content: 'いいね' }

function postForComment(posts, comments) {
    return posts.find(function(post) {
        return post.id === comments.postId
    })
}

console.log(postForComment(posts,comments));
//{id: 2, title: "新しい投稿"}
