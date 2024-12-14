// 要素を定数に代入
const loading = document.querySelector('#loading');

// イベント作成
// 画面.addEventListener(読み込み, () =>{
window.addEventListener('load', () => {
    // 要素.classList.add(つけたいクラス名)
    loading.classList.add('loaded');
});