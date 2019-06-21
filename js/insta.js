

(function () {


    const btn = document.querySelector('.heart_btn');
    const header = document.querySelector('#header');
    const side_box = document.querySelector('.side_box');
    const contents = document.querySelector('.contents_box');



    function eventHandler(e) {
        let elem = e.target;

        while (!elem.getAttribute('data-name')) {
            elem = elem.parentNode;

            if (elem.nodeName == 'BODY') {
                elem = null;
                return;
            }
        }

        // console.log(elem.getAttribute('data-name') + 'clicked! ');

        elem.classList.toggle('on');
    }


    function scrollfunc(){

        if (pageYOffset >= 10) {
            header.classList.add('on');
            side_box.classList.add('on');
            resizefunc();

        } else {

            header.classList.remove('on');
            side_box.classList.remove('on');

            // side_box.style.right = '0px';
            side_box.removeAttribute('style');

            console.log('no func!');

        }
    }



    function resizefunc(){


        if(pageYOffset >= 10){

            let calcWidth = (window.innerWidth * 0.5) + 167;

            // console.log(window.innerWidth);

            side_box.style.left =  calcWidth + "px";

        }




    }



    resizefunc();


    setTimeout(function(){
        scrollTo(0,0);
    },100);



    window.addEventListener('resize',resizefunc);



    window.addEventListener('scroll',scrollfunc);

    contents.addEventListener('click', eventHandler);

    btn.addEventListener('click', function () {
        this.classList.toggle('on');
    });




    if (matchMedia("screen and (max-width: 1024px)").matches) {
        // 1024px 이상에서 사용할 JavaScript


    } else {
        // 1024px 미만에서 사용할 JavaScript


    }


})();