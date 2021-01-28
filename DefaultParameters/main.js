const sayGreeting = (name) => console.log(`What's up ${name}!`);
sayGreeting('Bob');
//What's up Bob!が出力される。

sayGreeting();
//こうするとWhat's up undefined!が出力される。バグの温床になったりする為あまりよろしくない。

//引数になにも設定せず関数が呼び出された場合でも、デフォルト値を用意しておきたいときはこうする。
const sayGreeting2 = (name = 'Guest') => console.log(`What's up ${name}!`);
sayGreeting2();
//What's up Guest!が出力される。
sayGreeting2('Bro');
//もちろん引数を与えるとWhat's up Bro!が出力される。
