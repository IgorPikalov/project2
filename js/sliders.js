$(document).ready(function(){
    const slider = $('.sliders').bxSlider({
        pager: false,
        controls: false
    });

    $('.sliders__arrows--link--1').click(e=>{
       e.preventDefault()
       slider.goToNextSlide()
       
    })

    $('.sliders__arrows--link--2').click(e=>{
       e.preventDefault();
       slider.goToPrevSlide()
    })

   });