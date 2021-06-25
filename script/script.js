/*eslint-disable*/

$(function(){


   /*서브메뉴 펼치기*/
    $("li.mainLi").mouseover(function(){
         $("ul.subMenu").stop().slideDown(800);

    });


    /*서브메뉴 올리기*/

    $("li.mainLi").mouseout(function(){
        $("ul.subMenu").stop().slideUp(300);


    });

    /*stop() 메서드는 메모리 유지기능을 소멸시켜서 사용자의 이벤트가 종료되면 기능 또한 즉시 멈추는 기능*/

});
