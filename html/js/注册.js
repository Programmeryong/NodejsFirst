$(function () {
    $('#user').keyup(function () {
        let str=$('#user').val();
        let ret=/^[a-zA-Z][a-zA-Z0-9_]{5,15}$/;
        if(ret.test(str)){
            $('#user_text').text('正确').css({color:'green'});
        }else{
            $('#user_text').text('必须字母开头,请输入6-16个字符').css({color:'red'})
        }
    });

    $('#password').keyup(function () {
        let str=$('#password').val();
        let ret1=/[a-zA-Z]|[0-9]{8,15}$/;
        let ret2=/[a-zA-Z0-9_]{8,15}$/;
        let ret3=/^(?!([A-Z]*|[a-z]*|[0-9]*|[!-/:-@\[-`{-~]*|[A-Za-z]*|[A-Z0-9]*|[A-Z!-/:-@\[-`{-~]*|[a-z0-9]*|[a-z!-/:-@\[-`{-~]*|[0-9!-/:-@\[-`{-~]*)$)[A-Za-z0-9!-/:-@\[-`{-~]{8,15}$/;
        if(ret1.test(str)){
            $('.bg1').css({backgroundColor:'red',color:'#fff'});
            $('.bg2').css({backgroundColor:'',color:''});
            $('.bg3').css({backgroundColor:'',color:''});
        }
        if(ret2.test(str)){
            $('.bg1').css({backgroundColor:'',color:''});
            $('.bg3').css({backgroundColor:'',color:''});
            $('.bg2').css({backgroundColor:'#fff0ac',color:'#fff'});
        }
        if(ret3.test(str)){
            $('.bg1').css({backgroundColor:'',color:''});
            $('.bg2').css({backgroundColor:'',color:''});
            $('.bg3').css({backgroundColor:'green',color:'#fff'});
        }
    });

    $('#qrPass').keyup(function () {
        let str=$('#password').val();
        let str2=$('#qrPass').val();
        if(str==str2){
            $('.queren').text('密码正确').css({color:'green'});
        }else{
            $('.queren').text('密码错误').css({color:'red'});
        }
    });

    $('#telphone').keyup(function () {
        let ret=/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
        let str=$('#telphone').val();
        if(ret.test(str)){
            $('#phone_text').text('手机正确').css({color:'green'});
        }else {
            $('#phone_text').text('请输入正确的手机号码').css({color:'red'})
        }
    });

    $('#E-mail').keyup(function () {
       let ret=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
       let str=$('#E-mail').val();
       if(ret.test(str)){
           $('.e-mailtext').text('邮箱正确').css({color:'green'});
       }else {
           $('.e-mailtext').text('邮箱不符合').css({color:'red'});
       }
    });


    open($('#suc'),$('#contain'),$('#success'));
    colose($('.close'),$('#success'),$('#contain'));

    open($('#p'),$('#contain'),$('#warning'));
    colose($('.close'),$('#warning'),$('#contain'));
});
//打开或弹出
function open(obj,obj2,obj3) {
    obj.click(function () {
        obj2.show();
        obj3.show().animate({top:'200px'},500);
    })
}
//收齐或关闭
function colose(obj,obj2,obj3) {
    obj.click(function () {
        obj2.animate({top:'100px'},500);
        setTimeout(function () {
            obj2.hide();
            obj3.hide();
        },500)
    });
    obj3.click(function () {
        obj2.animate({top:'100px'},500);
        setTimeout(function () {
            obj2.hide();
            obj3.hide();
        },500)
    });
}
// $('#btn1').click(getclick());
//获取输入的数据并保存
// function getclick(){
//     let uname =$('#user').val();    //用户名
//     let upow=$('#qrPass').val();    //密码
//     let upho=$('#telphone').val();  //电话号码
//     let uem=$('#E-mail').val();     //邮箱


//     let blog = require('./model/app');      // 相当于是加载数据库
//     let sql = 'insert into table (p_name,p_pow,p_pho,p_em) value ('+uname+','+upow+','+upho+','+uem+')';
//       connection.query(sql, function(err, result){
//         if(err){
//           console.log(err);
//           return ;
//         }
//       })
// }