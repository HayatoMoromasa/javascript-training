url = "https://jsonplaceholder.typicode.com/posts/"

// console.log(fetch(url));
//Promise {<pending>}

fetch(url)
    .then(data => console.log(data));
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


fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
//(100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
//jsonで配列のデータがちゃんととれる


