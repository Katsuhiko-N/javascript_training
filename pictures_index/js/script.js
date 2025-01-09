const menu = document.querySelector('#menu');

// ファイル名の配列を作成
const pictures = [
    'sample-A',
    'sample-B',
    'sample-C',
    'sample-D',
    'sample-E',
    'sample-F'
    ];

console.log(pictures.length)

// 配列の長さの文繰り返し
for(let i = 0; i < pictures.length; i++){
    // html文を定数に代入
    const content = `<div><image src="images/${pictures[i]}.jpg" alt=""></div>`;
    
    // insertAdjacentHTMLでhtmlとして挿入
    menu.insertAdjacentHTML('beforeend',content);
}