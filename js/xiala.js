/*define(function(){
    return function(box){
        var oBox = document.getElementById(box);
        var aBtn = oBox.getElementsByTagName('input');
        var aDiv = oBox.getElementsByTagName('div');
        for(var i = 0; i<aBtn.length; i++){
            (function(index){
                aBtn[i].onclick = function(){
                    for(var i = 0; i<aBtn.length;i++){
                        aBtn[i].className= '';
                        aDiv[i].style.display = 'none';
                    }
                    aBtn[index].className = 'on';
                    aDiv[index].style.display = 'block';
                };
            })(i);
        }
    }
});*/
define(function (){
    return function(box){

    }
});
