// 処理を関数として定義
const getScrollPercent = () => {
    // スクロール量取得
    const scrolled = window.scrollY;
    console.log(`${scrolled} スクロール`,);
    
    const pageHeight = document.documentElement.scrollHeight;
    const viewHeight = document.documentElement.clientHeight;
    const percentage = scrolled / (pageHeight - viewHeight) * 100;
    
    document.querySelector('#p_bar').style.width = `${scrolled}`;
};

window.addEventListener('scroll', getScrollPercent);



// コンテンツ部分生成用
const text = document.querySelector('.text_a');
window.addEventListener('load', () =>{
    console.log('文字列を生成')
    for(let i = 0; i < 80; i++){
        // 改行文字含めるならtextContentsではなくinnerText
        text.innerText += 'あいうえお\n';
    };
});