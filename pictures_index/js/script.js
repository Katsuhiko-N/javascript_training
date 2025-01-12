const menu = document.querySelector('#menu');

// ファイル名の配列を作成
const pictures = [
    {
        name:'sample-A',
        color:'赤'
    },
    {
        name:'sample-B',
        color:'黄'
    },
    {
        name:'sample-C',
        color:'青'
    },
    {
        name:'sample-D',
        color:'紫'
    },
    {
        name:'sample-E',
        color:'茶'
    },
    {
        name:'sample-F',
        color:'灰'
    }
    ];

console.log(pictures.length)

// 配列の長さの文繰り返し
for(let i = 0; i < pictures.length; i++){
    // 分割代入
    const{name,color} = pictures[i];
    
    // html文を定数に代入
    const content = `<div><image src="images/${name}.jpg" alt=""><p>${color}</p></div>`;
    
    // insertAdjacentHTMLでhtmlとして挿入
    menu.insertAdjacentHTML('beforeend',content);
    
}