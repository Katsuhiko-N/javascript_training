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
const btn_reset = document.querySelector('#btn_reset');

// メッセージ
const info = document.querySelector('#info');
const d_info = document.querySelector('#d_info');
const p_info = document.querySelector('#p_info');


// 内容
const game = () => {
    // 初期化
    p_start.classList.add('hide');
    p_select.classList.remove('hide');
    
    let pc = 0;
    let pc_total = 0;
    
    let dc = 0;
    let dc_total = 0;
    
    info.textContent = "ヒット＝追加でカードを引く、チェック＝今のカードで勝負";
    
    // カード引く関数
    const draw = (card_total) => {
        if(card_total < 11){
            return Math.floor(Math.random()*(11)) + 1;
        }else{
            return Math.floor(Math.random()*(10)) + 1;
        }
    };
    
    // 勝負関数
    const battle = (p_card_total, d_card_total) => {
        if(d_card_total > 21){
            info.textContent = "あなたの勝ちです";
            btn_reset.classList.remove('hide');
        }else{
            if(p_card_total > d_card_total){
                info.textContent = "あなたの勝ちです";
                btn_reset.classList.remove('hide');
            }else if(p_card_total == d_card_total){
                info.textContent = "引き分けです";
                btn_reset.classList.remove('hide');
            }else{
                info.textContent = "あなたの負けです";
                btn_reset.classList.remove('hide');
            }
        }
    };
    
    let i = 0;
    while(i < 2){
        dc = draw(dc_total);
        d_card.textContent = d_card.textContent + ' ' + `${dc}`;
        dc_total = dc_total + dc;
        d_info.textContent = '合計は ' + `${dc_total}` + ' です';
        i++;
    }
    
    pc = draw(pc_total);
    p_card.textContent = p_card.textContent + ' ' + `${pc}`;
    pc_total = pc;
    p_info.textContent = '合計は ' + `${pc_total}` + ' です';
    
    // 勝負つくまで繰り返し
    btn_hit.addEventListener('click',() => {
        pc = draw(pc_total);
        p_card.textContent = p_card.textContent + ' ' + `${pc}`;
        pc_total = pc_total + pc;
        p_info.textContent = '合計は ' + `${pc_total}` + ' です';
        if(pc_total > 21){
            info.textContent = "21を超えました。あなたの負けです";
            btn_reset.classList.remove('hide');
            btn_hit.removeEventListener;
            btn_ck.removeEventListener;
            p_select.classList.add('hide');
        }else if(pc_total == 21){
            btn_hit.removeEventListener;
            btn_ck.removeEventListener;
            p_select.classList.add('hide');
            while(dc_total < 16){
                dc = draw(dc_total);
                d_card.textContent = d_card.textContent + ' ' + `${dc}`;
                dc_total = dc_total + dc;
                d_info.textContent = '合計は ' + `${dc_total}` + ' です';
            }
            battle(pc_total,dc_total);
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
            d_info.textContent = '合計は ' + `${dc_total}` + ' です';
        }
        battle(pc_total,dc_total);
    });
    
    btn_reset.addEventListener('click',() => {
        p_select.classList.remove('hide');
        btn_reset.classList.add('hide');
        pc = 0;
        pc_total = 0;
        p_card.textContent = '';
        
        dc = 0;
        dc_total = 0;
        d_card.textContent = '';
        
        info.textContent = "ヒット＝追加でカードを引く、チェック＝今のカードで勝負";

        i = 0;
        while(i < 2){
            dc = draw(dc_total);
            d_card.textContent = d_card.textContent + ' ' + `${dc}`;
            dc_total = dc_total + dc;
            d_info.textContent = '合計は ' + `${dc_total}` + ' です';
            i++;
        }
        
        pc = draw(pc_total);
        p_card.textContent = p_card.textContent + ' ' + `${pc}`;
        pc_total = pc;
        p_info.textContent = '合計は ' + `${pc_total}` + ' です';
    });
};

btn_st.addEventListener('click',game);

