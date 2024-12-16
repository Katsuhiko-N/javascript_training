//　以下ダークテーマ部分
const button = document.querySelector('#btn');



btn.addEventListener('click', () => {
    document.body.classList.toggle('darktheme');
    
    if (btn.textContent === 'ダークモードに変更'){
        btn.textContent = 'ライトモードに変更';
    } else {
        btn.textContent = 'ダークモードに変更';
    }
});

// 以下入力カウント部分
const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
    count.textContent = text.value.length;
    
    if(text.value.length >= 20){
        count.classList.add('alert');
    } else {
        count.classList.remove('alert');
    }
});


// 以下チェックボックス部分
const isAgreed = document.querySelector('#check')
const btn_ck = document.querySelector('#btn_ck');

isAgreed.addEventListener('change', () => {
    console.log('チェックの変更を検出')
    if (isAgreed.checked){
        // チェック時の処理
        btn_ck.disabled = false
    }else{
        // 未チェック時の処理
        btn_ck.disabled = true
    }
})

btn_ck.addEventListener('click', () => {
    console.log('ボタンが押されました')
})