// ローディング画面部分
const loading_window = document.querySelector('#loading_window');

const contents = document.querySelector('#contents');

// 画面の読み込み後、指定時間後に画面表示
window.addEventListener('load', () => {
    
    window.setTimeout(() =>{
        contents.classList.remove('hide');
        loading_window.classList.add('hide');
    },2000);
});


// 以下コンテンツ部分
const title_img = document.querySelector('#title_img');
const btn_prev = document.querySelector('#prev');
const btn_next = document.querySelector('#next');


const pictures = [
    {
        file: 'sample-A',
        name: '赤'
    },
    {
        file: 'sample-B',
        name: '黄'
    },
    {
        file: 'sample-C',
        name: '青'
    },
    {
        file: 'sample-D',
        name: '紫'
    },
    {
        file: 'sample-E',
        name: '茶'
    },
    {
        file: 'samplef',
        name: '灰'
    },
    ];
    
let pic_num = 0;
const{file,name} = pictures[pic_num];
const pic_content = `<div><img src="images/${file}.jpg"><p>${name}</p></div>`;

btn_next.addEventListener('click',() => {
    if(pic_num < 4){
        pic_num = pic_num + 1;
    }else{
        pic_num = 0;
    }
    const{file,name} = pictures[pic_num];
    const pic_content = `<div><img src="images/${file}.jpg"><p>${name}</p></div>`;
    title_img.innerHTML = pic_content;
    console.log(pic_num);
});

btn_prev.addEventListener('click',() => {
    if(pic_num > 0){
        pic_num = pic_num - 1;
    }else{
        pic_num = 4;
    }
    const{file,name} = pictures[pic_num];
    const pic_content = `<div><img class="pic" src="images/${file}.jpg"><p>${name}</p></div>`;
    title_img.innerHTML = pic_content;
    console.log(pic_num);
});

title_img.insertAdjacentHTML('beforeend',pic_content);