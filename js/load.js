$('.about__images__load').click(function(){
    setTimeout(load, 400)
})

function load() {
    $('#about__load').toggleClass('about__disabled')
}