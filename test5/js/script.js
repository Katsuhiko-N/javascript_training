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


// オブジェクトを配列に入れる練習
const lists = [
    {
        name: 'テスト0',
        num: '0'
    },
    {
        name: 'テスト1',
        num: '1'
    },
    {
        name: 'テスト2',
        num: '2'
    }
    ];
    
const list = document.querySelector('#list');

for(let i = 0; i < lists.length; i++){
    // 配列[インデックス].キーで配列内のオブジェクトのキーを指定できる
    const l_names = `<p>${lists[i].name}</p>`;
    list.insertAdjacentHTML('beforeend',l_names);
}

for(let i = 0; i < lists.length; i++){
    const l_nums = `<p>${lists[i].num}</p>`;
    list.insertAdjacentHTML('beforeend',l_nums);
}