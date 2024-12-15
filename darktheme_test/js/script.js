const button = document.querySelector('#btn');

btn.addEventListener("click", () => {
    document.body.classList.toggle('darktheme');
    
    if (btn.textContent === 'ダークモードに変更'){
        btn.textContent = 'ライトモードに変更'
    } else {
        btn.textContent = 'ダークモードに変更'
    }
})