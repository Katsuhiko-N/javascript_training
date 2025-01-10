const test = document.querySelector('#test');

// オブジェクトの書き方
const testobjects = {
    // プロパティはキー（左）と値（右）からなる
    name: 'テストオブジェクト',
    img: 'sanple-A.jpg',
};

console.log(testobjects);

const dot = `<p>ドット記法 => ${testobjects.name}</p>`;
const bracket = `<p>ブラケット記法 => ${testobjects['img']}</p>`;
test.insertAdjacentHTML('afterbegin',dot);
test.insertAdjacentHTML('beforeend',bracket);

// ブラケット記法ではキーに定数が使える