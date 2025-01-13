const text = document.querySelector('#text');
const block = document.querySelector('#block');

const keyframe1 = {
    // 開始時透明
    opacity: [0,1],
    // 開始時横50px,縦0ずれている
    translate: ['50px 0', 0]
};
text.animate(keyframe1,1000);


const keyframe2 = {
    // 開始時360deg回ったところから戻る
    rotate: ['360deg',0]
};
block.animate(keyframe2,1000);