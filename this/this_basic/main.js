const person = {
    name: 'Tom',
    hello: function() {
        console.log('hi ' + this.name);
    }
}

person.hello();
// hi Tom

//thisは実行コンテキストによって参照先が変わる

