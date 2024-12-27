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
const num_dice = document.querySelector('#num_dice');
const num_dice_face = document.querySelector('#num_dice_face');
const dice_btn = document.querySelector('#dice_btn');

let dice_faces = document.querySelector('#dice_faces');
const total = document.querySelector('#total');


dice_btn.addEventListener('click',() => {
    if(num_dice.value == ""){
        dice_faces.textContent = "値が未入力です";
        total.textContent = dice_faces.textContent;
    }else if(num_dice_face.value == ""){
        dice_faces.textContent = "値が未入力です";
        total.textContent = dice_faces.textContent;
    }else{
        dice_faces.textContent = "";
        let total_sum = 0;
        for(let i = num_dice.value; i > 0; i--){
            let face = Math.floor(Math.random()*(num_dice_face.value)) + 1;
            dice_faces.textContent = dice_faces.textContent + " " + face;
            total_sum = total_sum + face;
        }
        total.textContent = `${total_sum}`;
    }
    
})
