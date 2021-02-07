//▼thisの中身の4パターン

// 1) new演算子をつけて呼び出したとき: 新規生成されるオブジェクト

const dump = function(){console.log('this is',this)};
//this is dump{}

const obj = new dump();
console.log(obj);
//dump{}

console.log(dump.prototype)
// {constructor: ƒ}

console.log(obj !== dump.prototype)
//true

//コンストラクタ関数を呼ぶときに置くnew演算子だが、
//jsではコンストラクタ専用ではなく、様々な関数につけて実行することができる
//このときのnew演算子が何をやっているかというと、
//その関数のprototypeオブジェクトをコピーして新規にオブジェクトを作り、
//次にそれを関数に暗黙の引数thisとして渡し、
//最後にその関数がreturn thisで終わっていない場合は代わりにそれを実行する




// 2) メソッドとして実行されたとき: その所属するオブジェクト
const foo = {
    name: 'Foo Object',
    dump() {
        console.log(this)
    },
};

foo.dump();
//{name:"Foo Object", dump: ƒ}
//メソッドとして実行された場合、アクセス演算子 . の前のオブジェクトがthisとして渡される



// 3) 1),2)以外の関数[非・Strictモード]: グローバルオブジェクト

console.log(this);
//Window {window: Window, self: Window, document: document, name: "", location: Location, …}

//jsでのthisは、実際はグローバル変数である
//モジュールシステムがなかった初期のjsではすべての変数や関数はグローバル名前空間に展開され、どこからでも常に参照できた
//だからそれらの実行コンテキストはグローバルオブジェクトだったといえる
//メソッドではない関数、およびnew演算子をつけずに実行されるあらゆる関数はこのグローバルオブジェクトがthisとして引き渡されることになる


// 4) 1.2以外の関数[strictモード]
const Person = function(name){this.name = name;return this;};
console.log(Person('hey'));
//Window {window: Window, self: Window, document: document, name: "hey", location: Location, …}
// nameに"hey"が追加され、かんたんにグローバル汚染が起きてしまう
//これを防ぐ為に'use strict'を使う

// const Person2 = function(name){'use strict'; this.name = name;return this;};
// Person2('yo');
//Uncaught TypeError: Cannot set property 'name' of undefined

//クラス構文では自動的にstrictモードが有効になっている
//そのコンストラクタもnew演算子をつけないと実行できないようになってる
class Foo {constructor(){console.log('this is', this);}}
// console.log(Foo());
//Uncaught TypeError: Class constructor Foo cannot be invoked without 'new'

console.log(new Foo());
//this is Foo {}
//Foo {}



//▼thisの挙動の問題点と対処法
class Person2 {
    constructor(name) {
        this.name = name;
    }
    greet() {
        const doIt = function(){
            console.log(`Hey, I'm ${this.name}`);
        };
        doIt();
    }
}

const minky = new Person2('bob');
// console.log(minky.greet());
//main.js:83 Uncaught TypeError: Cannot read property 'name' of undefined
//メソッド内で定義された関数はただの関数で、そのオブジェクトの実行コンテキスト内にない
//クラス構文内ではstrictモードが有効になっているため、関数doItでのthisへのアクセスはundefinedになる

//対処法は以下の4つ
class Person3 {
    constructor(name){
        this.name = name;
    }
    // 1) bind()で関数にthisを束縛する
    greet1() {
        const doIt = function() {
            console.log(`1) Hi I'm ${this.name}`);
        };
        const bindedDoIt = doIt.bind(this);
        bindedDoIt();
    };

    // 2) call()またはapply()を使ってthisを指定して実行する
    greet2() {
        const doIt = function(){
            console.log(`2) Hi I'm ${this.name}`);
        }
        doIt.call(this);
    }

    // 3) thisの値を一時変数に代入する
    greet3() {
        const _this = this;
        const doIt = function() {
            console.log(`3) Hi I'm ${_this.name}`);
        }
        doIt();
    }

    // 4) アロー関数式で定義する
    greet4() {
        const doIt = () => {
            console.log(`4) Hi I'm ${this.name}`);
        }
        doIt();
    }
    //メソッド自身もアロー関数式で定義
    greet5 = () => {
        const doIt = () => {
            console.log(`5) Hi I'm ${this.name}`);
        }
        doIt();
    }

}

const creamy = new Person3('creamy')
console.log(creamy.greet1());
//1) Hi I'm creamy
console.log(creamy.greet2());
//2) Hi I'm creamy
console.log(creamy.greet3());
//3) Hi I'm creamy
console.log(creamy.greet4());
//4) Hi I'm creamy
console.log(creamy.greet5());
//5) Hi I'm creamy


//推奨されるthisを使う原則
//・thisはクラス構文でしか使わない
//・クラス構文内では、メソッドを含めたあらゆる関数の定義をアロー関数式で行う
