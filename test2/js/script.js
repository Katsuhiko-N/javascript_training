const btn = document.querySelector('#btn');
const sc_btn = document.querySelector('#sc_btn');
const message = document.querySelector('#message');

// btnにイベント付与
btn.addEventListener('click',() => {
    message.textContent = `スイッチON`
    btn.classList.toggle('green');
    message.classList.toggle('hidden')
});

// 上までスクロールするボタン
sc_btn.addEventListener('click',() => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
})