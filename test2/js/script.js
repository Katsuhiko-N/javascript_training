const btn = document.querySelector('#btn');
const message = document.querySelector('#message');

// textにイベント付与
btn.addEventListener('click',() => {
    message.textContent = `スイッチON`
    btn.classList.toggle('green');
    message.classList.toggle('hidden')
});