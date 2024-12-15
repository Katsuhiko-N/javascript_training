const button = document.querySelector('#btn');
const text = document.querySelector('#text');
const count = document.querySelector('#count');

btn.addEventListener('click', () => {
    document.body.classList.toggle('darktheme');
    
    if (btn.textContent === 'ダークモードに変更'){
        btn.textContent = 'ライトモードに変更';
    } else {
        btn.textContent = 'ダークモードに変更';
    }
});

text.addEventListener('keyup', () => {
    count.textContent = text.value.length;
});
