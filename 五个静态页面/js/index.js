window.onload=function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: true,
        
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationType : 'fraction',
        autoplay : 2000,
        direction : 'horizontal',
        preventClicks : true,//默认true
        preventClicksPropagation : true,
      })  
}
