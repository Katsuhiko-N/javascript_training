// 各プレイヤーのカード
const d_card = document.querySelector('#d_card');
const p_card = document.querySelector('#p_card');

// ボタンエリア
const p_start = document.querySelector('#p_start');
const p_select = document.querySelector('#p_select');

// ボタン
const btn_st = document.querySelector('#btn_st');

const btn_hit = document.querySelector('#btn_hit');
const btn_ck = document.querySelector('#btn_ck');

// メッセージ
const info = document.querySelector('#info');


// 内容
const game = () => {
    // 初期化
    p_start.classList.add('hide');
    p_select.classList.remove('hide');
    
    let pc = 0;
    let pc_total = 0;
    
    let dc = 0;
    let dc_total = 0;
    
    let key = 0;
    
    // カード引く関数
    const draw = (card_total) => {
        if(card_total < 11){
            return Math.floor(Math.random()*(11)) + 1;
        }else{
            return Math.floor(Math.random()*(10)) + 1;
        }
    }
    
    // 勝負関数
    const battle = (p_card_total, d_card_total) => {
        if(d_card_total > 21){
            info.textContent = "あなたの勝ちです";
        }else{
            if(p_card_total > d_card_total){
                info.textContent = "あなたの勝ちです";
            }else if(p_card_total == d_card_total){
                info.textContent = "引き分けです";
            }else{
                info.textContent = "あなたの負けです";
            }
        }
    }
    
    let i = 0;
    while(i < 2){
        dc = draw(dc_total);
        d_card.textContent = d_card.textContent + ' ' + `${dc}`;
        dc_total = dc_total + dc;
        i++;
    }
    
    pc = draw(pc_total);
    p_card.textContent = p_card.textContent + ' ' + `${pc}`;
    pc_total = pc;
    
    // 勝負つくまで繰り返し
    btn_hit.addEventListener('click',() => {
        pc = draw(pc_total);
        p_card.textContent = p_card.textContent + ' ' + `${pc}`;
        pc_total = pc_total + pc;
        if(pc_total > 21){
            info.textContent = "21を超えました。あなたの負けです";
            btn_hit.removeEventListener;
            btn_ck.removeEventListener;
            p_select.classList.add('hide');
            
        }
    });
    
    btn_ck.addEventListener('click',() => {
        btn_hit.removeEventListener;
        btn_ck.removeEventListener;
        p_select.classList.add('hide');
        while(dc_total < 16){
            dc = draw(dc_total);
            d_card.textContent = d_card.textContent + ' ' + `${dc}`;
            dc_total = dc_total + dc;
        }
        battle(pc_total,dc_total);
    });
    
}

btn_st.addEventListener('click',game);

