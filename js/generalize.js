/**
 * Created by Administrator on 2018/1/16.
 */
/**/
var params= $.formatSearch(window.location.search);

$.ajax({
    type: 'POST',
    url: '/ApplyOut/getPagesConfig',
    async:false,
    data: {
        'page_id': params.page_id
    },
    success: function (data) {
        $('head').append('<title>'+data.title+'</title>');
        $('body').removeAttr('class','grey');
        $('body').css('background',"url("+data.bodyImg+") center center repeat");
        $('.top-img').append('<img src="'+data.topImg+'" alt=""/>');
        $('.foot-img').append('<img src="'+data.footImg+'" alt=""/>');
        var resChild = '';
        if(data.btnImg3!=null){
            resChild = '<div class="tab one left" data-url="'+data.btnUrl2+'&devMobile='+params.devMobile+'" style="background: url('+data.btnImg2+') 0 0 no-repeat;background-size:100%;"></div>'
                +'<div class="tab two center checked"   id="sele-active" data-url="'+data.btnUrl1+'&devMobile='+params.devMobile+'" style="background: url('+data.btnImg1+') 0 0 no-repeat;background-size:100%;"></div>'
                +'<div class="tab three right" data-url="'+data.btnUrl3+'&devMobile='+params.devMobile+'" style="background: url('+data.btnImg3+') 0 0 no-repeat;background-size:100%;"></div>'
            ;
        }else{
            if(data.btnImg2==null){
                resChild = '<div class="tab center checked"  id="sele-active"  data-url="'+data.btnUrl1+'&devMobile='+params.devMobile+'" style="background: url('+data.btnImg1+') 0 0 no-repeat;background-size:100%;"></div>';
            }else{
                resChild = '<div class="tab left checked"  id="sele-active" data-url="'+data.btnUrl1+'&devMobile='+params.devMobile+'" style="background: url('+data.btnImg1+') 0 0 no-repeat;background-size:100%;"></div>'
                    +'<div class="tab right" data-url="'+data.btnUrl2+'&devMobile='+params.devMobile+'" style="background: url('+data.btnImg2+') 0 0 no-repeat;background-size:100%;"></div>'
            }
        }
        $('.switch').append(resChild);
        $('#jump').attr('href',$('#sele-active').attr('data-url'));
        $('.apply').css('background',"url("+data.productImg+")")
        $('.switch .tab').on('click',function(){
            $('#jump').attr('href',$(this).attr('data-url'));
        });
    }});