$(function (){
    $('#btni').on('click',function (){

        $.ajax({
            url:'http://localhost:8080/CNB_RPM_UI/servlet/PhoneServlet',
            data:{class:"userSignOn",actorname:"860030013",password:"123456"},
            dataType:'json',
            cache:false,
            success:(r)=>{
                alert(r);
                if (r.status){
                    
                    alert('登陆成功');
                }else{
                    alert(r.message);
                }
            },error:(r)=>{
                alert('用户名或者密码错误！');
            }

        });

    });
});
