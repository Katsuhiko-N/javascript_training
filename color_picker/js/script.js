// 定数を宣言
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');


// 関数を定義

const colorBg = () => {
    // 選択した色を背景色に指定
    document.body.style.backgroundColor = color.value;
    // html.bodyタグ.style.CSSプロパティ = 値;
    
    // カラーコードを表示
    // バックティック(``)で囲むと${}がつかえる（テンプレート文字列）
    // バックティックはshift+@
    if(color.value === '#ffffff'){
        text.textContent = `カラーコード：${color.value}(white)`;
    }else if(color.value === '#000000'){
        text.textContent = `カラーコード：${color.value}(black)`;
    }else{
        text.textContent = `カラーコード：${color.value}`;
    }
    
};


// 何が.addEventListner(どうなったら,どうなる)
// addEventListnerでイベントを設定

// 何が＝color
// どうなったら（イベント）＝入力（input）されたら
// 関数colorBgを発動

color.addEventListener('input',colorBg);
