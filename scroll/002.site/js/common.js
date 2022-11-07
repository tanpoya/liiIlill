// 보그 PJ 공통JS - common.js

// const { default: $ } = require("../../../../05.jQuery학습/004.플러그인/009.swiper-4.1.0/swiper-4.1.0/src/utils/dom");

// 제이쿼리 구역 길게쓰기도 있음
// $(document).ready(function(){})

$(()=>{ ///////////// jQB //////////////////////

    console.log("로딩완료");

    ////// 스크롤 이벤트 구역
    // 이벤트명: scroll
    // 이벤트 대상: window
    const topA = $("#top");

    // 변경대상: .tbtn
    const tbtn = $(".tbtn");

    // 스크롤위치변수
    let scTop;
    // 마지막 스크롤 위치값
    let lastSc = 0;

    // 스크롤 액션 대상 위치값 배열변수
    const scpos = [];
    // 각 등장액션 요소변수
    const scAct = $(".scAct")
    // console.log("등장액션요쇼 개수: ", scAct.length);
    // length는 제이쿼리에서도 동일한 이름으로 개수를 가져옴

    // 윈도우 높이 절반값
    const hw = $(window).height()/2

    // 제이쿼리에서 for문대신 쓰는 each() 메서드
    // 요소.each((순번, 요소)=>{구현부})
    
    // 등장액션 클래스 요소의 위치를 배열에 담기
    // 조건:
        // 현재스크롤 위치(scTop)가
        // 등장액션요소 위치(scpos[순번]) - 상단영역크기(206) - hw
        // 보다 커지면 해당 순번의 등장액션요소의 클래스 "on"을 추가한다
        // -> 위의 조건에서 뺀값을 미리 세팅해 준다
    scAct.each((idx, ele)=>{
        scpos[idx] = $(ele).offset().top - 206 - hw;
        // 시작위치보정: 원래위치 - 상단높이 - 윈도우절반
        // $(ele) 제이쿼리 선택필수
        // offset().top -> 맨위에서부터 top위치값
    });

    // 위치배열값 확인하기
    console.log("위치배열값: ", scpos)



    ////////////////////////////////////
    ////// 스크롤 이벤트 함수 ///////////
    $(window).scroll(function(){
        // 스크롤 위치값
        scTop = $(this).scrollTop();
        //scrollTop() 메서드 - 세로스크롤 위치값을 리턴하는 메서드
        console.log(scTop);

        // 1. 슬림메뉴 클래스on 적용
        // 기준위치는 스크롤위치 100px 이상

        if(scTop >= 100) { // 100px 이상
            topA.addClass("on");

            // 스크롤 방향에 따라 숨겼다보이는 top값 변경
            if(scTop > lastSc) {
                // #top의 높이값(동적으로 높이값 설정)
                let temp = topA.innerHeight();
                // 스크롤 아랫방향
                topA./* removeClass("up") */css({top:-temp+"px"});
                // removeClass("up")
                // console.log(temp);
                // height() - 패딩이 빠진 순수높이값
                // innerHiehgt() - 패딩포함 내부높이값
            } else {
                topA.css({top:"0"});
                // addClass("up").css
                // console.log("윗방향", lastSc);
            }


        } else { // 100px 미만
            topA.removeClass("on up");
            // removeClass(클래스명) - 클래스지우기
            // 띄어쓰기로 다른 클래스도 함께 지우기 가능
        } //////// if ///////////

        ///////////////////////////
        // 스크롤 방향 알아내기 ////

        // 마지막 위치 업데이트 필수
        lastSc = scTop;
        /////////////////////////

        // 2. TOP버튼 보이기/숨기기
        if(scTop >= 300) {
            tbtn.addClass("on");
        } else {
            tbtn.removeClass("on");
        }

        // 3. 등장액션 적용하기
        // 스크롤 등장액션 검사함수 호출
        // 등장요소 개수만큼 자동으로 돌아주며 호출
        scAct.each(idx=>scAction(idx))

    }); /////////// scroll ///////////

    /******************************************* 
    
        함수명: scAction
        기능: 스크롤 등장액션 주기

    *******************************************/
   function scAction(n) { // n - 순번값
        // 해당영역일 경우 해당요소에 클래스 "on"넣기
        // 구간은 사이구간으로 설정해야 다음구간과 겹쳐지지 않음
        if(scTop > scpos[n] && scTop < scpos[n]+200) {
            scAct.eq(n).addClass("on")
        } //////// if //////////////
   } ///////// scAction //////////


    //////// TOP버튼 클릭 설정 //////////
    tbtn.click(()=>{
        // 스크롤 최상단으로 애니메이션 스크롤 이동
        // 전체 스크롤 이동의 대상은
        // -> html, body 두 최상위 요소를
        // 대상으로 한다 그랴여 모든 브라우저에서 공통으로 작동함
        $("html, body").animate({
            scrollTop:"0"
        }, 800, "easeOutCirc");
        // scrollTop 속성은 제이쿼리 전용
        // 세로스크롤 위치값을 셋팅할 수 있다
        // 참고) 가로스크롤은 scrollLeft
    });



}); ///////////// jQB //////////////////////