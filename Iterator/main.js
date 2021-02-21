//Iterator
//反復操作を行う際に使用するオブジェクト
// function genIterator() {
//     //ここからイテレーター
//     return {
//         next: function() {
//             return {
//                 done: true / false,
//                 value: 値
//             }
//         }
//     }
//     //ここまで
// }

　

function genIterator() {
    let i = 0;
    return {
        next: function() {
            return {
                done: false,
                value: i++
            }
        }
    }
}

const it = genIterator();
console.log(it.next());
console.log(it.next());
console.log(it.next());
// {done: false, value: 0}
// {done: false, value: 1}
// {done: false, value: 2}
