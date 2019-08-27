






const elemHeight = document.querySelector('.img_section img').clientHeight;
const scrollHeight = document.querySelector('.scroll_section');
const commentBtn = document.querySelector('.try_comment');
const inputField = document.querySelector('.commit_field input');
const pop = document.querySelector('.del_pop');
const more = document.querySelector('.more_trigger');
const cancel = document.querySelector('.cancel');
const del = document.querySelector('.del');


console.log(elemHeight);

scrollHeight.style.height = (elemHeight - 242) + 'px';



commentBtn.addEventListener('click',function(){
    let text = this.parentNode.previousSibling.previousSibling;
    let findValue = document.querySelector('.user_id').innerHTML;
    inputField.value= '@'+text.innerHTML ;
    inputField.focus();

});



scrollHeight.addEventListener('click',function(e){
    e.stopPropagation();


    let elem = e.target;
    console.log(elem);

    while (!elem.getAttribute('class')) {
        elem = elem.parentNode;

        if (elem.nodeName === 'BODY') {
            elem = null;
            return;
        }
    }

    if(elem.matches('[class="sprite_more_icon"]')||elem.matches('[class="more_trigger"]')){


        pop.classList.add('on');

    }
});




cancel.addEventListener('click',function(e){
    pop.classList.remove('on');
});



del.addEventListener('click',function(e){


    if(confirm('진짜 삭제할끼니?') === true){
        console.log('삭제');
        pop.classList.remove('on');

        //삭제 스크립트작성

    }else{
        console.log('취소');
    }
});



//
//
// document.addEventListener('click',function(){
//     pop.classList.remove('on');
// });














