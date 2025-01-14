const text = document.querySelector('#text');
const block = document.querySelector('#block');

const keyframe1 = {
    // 開始時透明
    opacity: [0,1],
    // 開始時横50px,縦0ずれている
    translate: ['50px 0', 0]
};
text.animate(keyframe1,1000);

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
        rotate: 0
    }
    ];
    
    // オプションとして動きの詳細を指定可
    const option1 = {
        // 再生時間
        duration: 5000,
        // 変化速度
        easing: 'cubic-bezier(.12,.44,.48,.96)'
        
    };
    
block.animate(keyframe2,option1);