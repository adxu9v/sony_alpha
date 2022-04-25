$(document).ready(function(){ 
    let footer_num = 0;
    $('.footer_more>li:nth-child(1)').click(function(){
        if(footer_num == 0){$('.footer_sub').slideDown();
        $(this).css({'background-color':'#2c2f39'}).children('span').css({'transform':'rotate(180deg)'})
        footer_num = 1;
    }    
    else if(footer_num == 1){$('.footer_sub').slideUp();
        footer_num = 0;
        $(this).css({'background-color':'#666'}).children('span').css({'transform':'rotate(0deg)'})
    }    
    })
    let mobileClick = 0
    $('#mobile_bt').click(function(){ 
        if(mobileClick == 0){
            mobileClick = 1
        $('#mobile_bt>li:nth-child(1)').css({'transform':' rotate(45deg)','top':'10px','width':'24px'})
        $('#mobile_bt>li:nth-child(2)').css({'transform':' rotate(-45deg)','top':'10px','width':'24px'})
        $('#mobile_bt>li:nth-child(3)').css({'opacity':'0'})
        $('#mobile_bg').animate({'left':'0'})}
        
        else if(mobileClick == 1){
            mobileClick = 0
            $('#mobile_bt>li:nth-child(1)').css({'transform':' rotate(0)','top':'0px','width':'24px'})
        $('#mobile_bt>li:nth-child(2)').css({'transform':' rotate(0)','top':'8px','width':'24px'})
        $('#mobile_bt>li:nth-child(3)').css({'opacity':'1'})
        $('#mobile_bg').animate({'left':'-100%'})}
    })
    $('#video_slide_bt>li').click(function(){
           $('#video_slide').animate({'left':($(this).index()*-100)+'%'},300)
           $(this).css({'background-color':'#e75300'}).siblings().css({'background-color':'#333335'})
           $(this).children('div').css({'background-color':'#e75300'})
           $(this).siblings().children('div').css({'background-color':'#555'})
       })
       $('#event_bt_event').click(function(){
           $('#event_event').show();
           $('#event_seminar').hide();
       })
       $('#event_bt_seminar').click(function(){
           $('#event_event').hide();
           $('#event_seminar').show();
       })
       $('#event_bt>li').click(function(){
           $(this).stop().css({'font-weight':'700','color':'#000'}).siblings().stop().css({'font-weight':'400','color':'#666'})
           $(this).stop().children('span').animate({'right':'0'}).parent().siblings().children('span').stop().animate({'right':'100%'})
       })
       $(window).scroll(function(){
          let sc= $('html,body').scrollTop()
          if(sc<1){$('header').css({'position':'fixed'})}
          if(sc>=1){$('header').css({'position':'relative'})}
           if(110<sc<770){
                $('#magazine>h2').animate({'opacity':'1','marginTop':'0'})
                $('#magazine>p').animate({'opacity':'1','marginTop':'10px'})
                $('#magazine>ul').delay(200).animate({'opacity':'1','marginTop':'50px'})
           }
           if(771<sc<1000){
               $('#video>h2').animate({'opacity':'1','marginTop':'0'})
           }
       })
})