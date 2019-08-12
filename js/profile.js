
const tapContainer = document.querySelector('.about');
const flex_Container = document.querySelectorAll('.contents_container');

function openCity(e) {

    let elem = e.target;

    console.log(elem);


    for (var i = 0; i < flex_Container.length; i++) {
        flex_Container[i].classList.remove('active');
    }


    if(elem.matches('[class="nick_name"]')){

        flex_Container[0].classList.add('active');


    }else if(elem.matches('[class="book_mark"]')){

        flex_Container[1].classList.add('active');


    }

}

tapContainer.addEventListener('click', openCity);


