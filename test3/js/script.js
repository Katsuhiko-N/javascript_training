// ランダム生成テスト（背景色変更）
const bg_btn = document.querySelector('#bg_btn');
const body = document.querySelector('body');

bg_btn.addEventListener('click',() => {
    const rand1 = Math.floor(Math.random()*(256)) + 0;
    const rand2 = Math.floor(Math.random()*(256)) + 0;
    const rand3 = Math.floor(Math.random()*(256)) + 0;
    body.style.backgroundColor = `rgb(${rand1},${rand2},${rand3})`;
})


// ランダム生成テスト（サイコロ）
const num_dice_face = document.querySelector('#num_dice_face');
const dice_btn = document.querySelector('#dice_btn');

const dice = document.querySelector('#dice');

dice_btn.addEventListener('click',() => {
    const dice_return = Math.floor(Math.random()*(num_dice_face.value)) + 1;
    dice.textContent = `${dice_return}`;
})
