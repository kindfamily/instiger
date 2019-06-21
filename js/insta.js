

(function () {


    const btn = document.querySelector('.heart_btn');
    const header = document.querySelector('#header');
    const side_box = document.querySelector('.side_box');
    const contents = document.querySelector('.contents_box');


    btn.addEventListener('click', function () {
        this.classList.toggle('on');
    });


    $('.commit_field input').focus(function () {
        $('.upload_btn').addClass('on');
    });

    $('.commit_field input').blur(function () {
        $('.upload_btn').removeClass('on');
    });


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


    function resizefunc(){

        console.log(window.innerWidth);

        side_box.style.left = window.innerWidth;

    }

    contents.addEventListener('click', eventHandler);


    window.addEventListener('scroll', function (e) {

        // console.log(this.scrollY);

        if (this.scrollY >= 10) {
            header.classList.add('on');
            side_box.classList.add('on');


        } else {
            header.classList.remove('on');
            side_box.classList.remove('on');
        }

    });

    window.addEventListener('resize',resizefunc);

    if (matchMedia("screen and (max-width: 1024px)").matches) {
        // 1024px 이상에서 사용할 JavaScript


    } else {
        // 1024px 미만에서 사용할 JavaScript


    }


})();