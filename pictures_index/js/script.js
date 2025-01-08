const menu = document.querySelector('#menu');

// html文を定数に代入
const content = '<div><image src="images/sample-A.jpg" alt=""></div>';

// insertAdjacentHTMLでhtmlとして挿入
menu.insertAdjacentHTML('beforeend',content);