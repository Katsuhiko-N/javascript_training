const text = document.querySelector('#text');
const block = document.querySelector('#block');
const block2 = document.querySelector('#block2');

// キーフレームとオプションの組合せ

const keyframe1 = {
    // 開始時透明
    opacity: [0,1],
    // 開始時横50px,縦0ずれている
    translate: ['50px 0', 0],
    
};

const option1 = {
    duration: 2000
};

text.animate(keyframe1,option1);

// 配列を使った記述
const keyframe2 = [
{
    // 開始時
    // 360deg回ったところから戻る
    rotate: '360deg'
},
{
    // 終了時
    // 0度で止める
    rotate: '0deg'
}
];

// オプションとして動きの詳細を指定可
const option2 = {
    // 再生時間
    duration: 5000,
    // 変化速度
    easing: 'cubic-bezier(.12,.44,.48,.96)'
    
};
    
block.animate(keyframe2,option2);

const keyframe3 = {
    backgroundColor: ['red','yellow','green','blue']
};

const option3 = {
    duration: 3000,
    // 終了地点から開始地点まで戻す
    direction: 'alternate',
    // 繰り返し続ける
    iterations: Infinity
};

block2.animate(keyframe3,option3);