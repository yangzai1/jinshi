var name = '自己起个名';
//这个value就是你要变化的那一部分，不变得我已经给你加到cookie里了。
var value = 'http://localhost:8080/CNB_RPM_UI/';
function setCookie(name,value,iDay){
    var str = name + '='+value+'servlet/PhoneServlet;path=/';
    //如果传入了过期天数
    if(iDay){
        var oDate = new Date();
        oDate.setDate(oDate.getDate()+iDay);
        str += ';expires='+oDate;
    }
    document.cookie = str;
}

function getCookie(name){
    var arr = document.cookie.split('; ');
    for(var i = 0; i < arr.length;i++){
        var arr2 = arr[i].split('=');
        if(name == arr2[0]){
            return arr2[1];
        }
    }

    return '';
}

function removeCookie(name){
    setCookie(name,'zns',-2)
}