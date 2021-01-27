// //オブジェクト
const myProfile = {
    name: "hayato1",
    age: "27",
};

const text1 = `My name is ${myProfile.name}. I'm ${myProfile.age}years old.`
console.log(text1);

const { name, age } = myProfile;
const text2 = `My name is ${name}. I'm ${age}years old.`
console.log(text2);


//配列
const myProfile2 = ['hayato moromasa', 27];
const text3 = `My name is ${myProfile2[0]}. I'm ${myProfile2[1]}years old.`
console.log(text3);

const [ name2, age2 ] = myProfile2;
const text4 = `My name is ${name2}. I'm ${age2}years old.`
console.log(text4);
