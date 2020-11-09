$('.about__images__load').click(function(){
    setTimeout(load, 400);
})

function load() {
    let load = document.querySelector('#about__load'),
        loadDiv = document.querySelector('.about__images__load')

    load.classList.toggle('about__disabled')

    if(load.classList.contains('about__disabled') == false) {
        loadDiv.innerHTML='close'
    } else {
        loadDiv.innerHTML='load more work'
    }
}