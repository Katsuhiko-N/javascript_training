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
const pic_content = `<div><img class="pic" src="images/${file}.jpg"><p>${name}</p></div>`;
title_img.insertAdjacentHTML('beforeend',pic_content);

btn_prev.addEventListener('click',() => {
    if(pic_num < 5){
        pic_num = pic_num + 1;
    }else
    pic_num = 0;
});

btn_next.addEventListener('click',() => {
    if(pic_num > 0){
        pic_num = pic_num - 1;
    }else
    pic_num = 5;
});