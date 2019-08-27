

(function () {


    const header = document.querySelector('#header');
    const side_box = document.querySelector('.side_box');
    const contents = document.querySelector('.contents_box');
    const variableWidth = document.querySelectorAll('.contents_box .contents');




    function eventHandler(e) {
        let elem = e.target;
        console.log(elem);

        while (!elem.getAttribute('data-name')) {
            elem = elem.parentNode;

            if (elem.nodeName === 'BODY') {
                elem = null;
                return;
            }
        }



        if(elem.matches('[data-name="heartbeat"]')){

            console.log('하트');

        }else if(elem.matches('[data-name="book-mark"]')){

            console.log('북마크');

        }else if(elem.matches('[data-name="share"]')){

            console.log('공유');

        }else if(elem.matches('[data-name="more"]')){

            console.log('더보기');
        }

        elem.classList.toggle('on');
    }


    function scrollfunc(){

        if (pageYOffset >= 10) {
            header.classList.add('on');

            resizefunc();


            if(side_box){
                side_box.classList.add('on');
            }


        } else {

            header.classList.remove('on');


            if(side_box){
                side_box.classList.remove('on');
                side_box.removeAttribute('style');
            }
            console.log('no func!');

        }


    }



    function resizefunc(){


        if(pageYOffset >= 10){

            let calcWidth = (window.innerWidth * 0.5) + 167;

            // console.log(window.innerWidth);


            if(side_box){
                side_box.style.left =  calcWidth + "px";
            }

        }


        if (matchMedia("screen and (max-width: 800px)").matches) {
            // 1024px 이하 사용할 JavaScript

            console.log('1024');


            for(let i=0; i < variableWidth.length; i++){

                variableWidth[i].style.width = window.innerWidth-20 + 'px';
            }


        }


        for(let i=0; i<variableWidth.length; i++){

            if(window.innerWidth > 600){

                variableWidth[i].removeAttribute('style');
            }
        }

    }



    setTimeout(function(){
        scrollTo(0,0);
    },100);


    resizefunc();

    window.addEventListener('resize',resizefunc);


    window.addEventListener('scroll',scrollfunc);

    if(contents){
        contents.addEventListener('click', eventHandler);
    }


})();