// 定数を宣言
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');


// 関数を定義

const colorBg = () => {
    // バックティック(``)で囲むと${}がつかえる（テンプレート文字列）
    // バックティックはshift+@
    text.textContent = `カラーコード：${color.value}`;
};


// 何が.addEventListner(どうなったら,どうなる)
// addEventListnerでイベントを設定

// 何が＝color
// どうなったら（イベント）＝入力（input）されたら
// 

color.addEventListener('input',colorBg);
