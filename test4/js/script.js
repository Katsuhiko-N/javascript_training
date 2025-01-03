// 各プレイヤーのカード
const d_card = document.querySelector('#d_card');
const p_card = document.querySelector('#p_card');

// ボタンエリア
const p_start = document.querySelector('#p_start');
const p_select = document.querySelector('#p_select');
const p_continue = document.querySelector('#p_continue');

// ボタン
const btn_st = document.querySelector('#btn_st');

const btn_hit = document.querySelector('#btn_hit');
const btn_ck = document.querySelector('#btn_ck');
const btn_end = document.querySelector('#btn_end');

const btn_continue = document.querySelector('#btn_continue');
const btn_exit = document.querySelector('#btn_exit');

// メッセージ
const info = document.querySelector('#info');

// ヒット関数
const hit = (card_total) => {
    if(card_total < 11){
        return Math.floor(Math.random()*(12)) + 1;
    }else{
        return Math.floor(Math.random()*(11)) + 1;
    }
}

// バスト関数
const bust = (card_total) => {
    if(card_total > 21){
        alert("あなたの負けです");
    }
}

// 勝負関数
const battle = (p_card_total, d_card_total) => {
    if(p_card_total > d_card_total){
        alert("あなたの勝ちです");
    }else if(p_card_total == d_card_total){
        alert("引き分けです");
    }else{
        alert("あなたの負けです");
    }
}

// 内容
const game = () => {
    // 数値初期化
    let pc = 0;
    let pc_total = 0;
    
    let dc = 0;
    let dc_total = 0;
    
    pc = hit(pc_total);
    dc = hit(dc_total);
    
    p_card.textContent = p_card.textContent + `${pc}`
    d_card.textContent = d_card.textContent + `${dc}`
    
    
}