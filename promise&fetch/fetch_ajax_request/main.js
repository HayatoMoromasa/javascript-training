// url = "https://jsonplaceholder.typicode.com/posts/"

// console.log(fetch(url));
//Promise {<pending>}

// fetch(url)
//     .then(data => console.log(data));
    // Response {type: "cors", url: "https://jsonplaceholder.typicode.com/posts/", redirected: false, status: 200, ok: true, …}
    // body: (...)
    // bodyUsed: false
    // headers: Headers {}
    // ok: true
    // redirected: false
    // status: 200
    // statusText: ""
    // type: "cors"
    // url: "https://jsonplaceholder.typicode.com/posts/"
    // __proto__: Response
//dataには、リクエストしたものに対応したレスポンスのデータそのものははいっていない


// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data));
//(100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
//jsonで配列のデータがちゃんととれる


//fetchの微妙な点

url = "https://jsonplaceholder.typicode.com/posts1233456/"

fetch(url)
    .then(response => console.log(response))
    .catch(error => console.log('問題発生',error));
    //  GET https://jsonplaceholder.typicode.com/posts1233456/ 404
    // Response {type: "cors", url: "https://jsonplaceholder.typicode.com/posts1233456/", redirected: false, status: 404, ok: false, …}
    // body: (...)
    // bodyUsed: false
    // headers: Headers {}
    // ok: false
    // redirected: false
    // status: 404
    // statusText: ""
    // type: "cors"
    // url: "https://jsonplaceholder.typicode.com/posts1233456/"
    // __proto__: Response
//404の結果は返ってくるが、問題発生のログが出ていない。ということはcatchが通っていない。
//他のajaxのライブラリ(jQuery ajax,Axiosなど)は異常なステータスコードが入ってきたらcatchにいくが
//nativeのfetchは問題が起きたときcatchにはいかない
//ステータスコードが404とか、サーバーがレスポンス返してる場合はthenを返すようになっている
//どういうときにcatchにはいるのか？
//ネットワークのリクエスト自体が失敗するとcatchにいく
//↓こんな感じ
url2 = "https://jsonplaceholder.typicode1233456.com/posts/"

fetch(url2)
    .then(response => console.log(response))
    .catch(error => console.log('問題発生',error));
    // GET https://jsonplaceholder.typicode1233456.com/posts/ net::ERR_NAME_NOT_RESOLVED
    // 問題発生 TypeError: Failed to fetch

