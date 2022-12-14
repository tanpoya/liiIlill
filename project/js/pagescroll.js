// 1. 스크롤횟수
let cnt_sc = 0;

// 2. 이동단위(한번에 이동할 크기)
const unit_sc = 200;

// 3. 스크롤횟수 한계값
let limit_sc;
// 스크롤횟수 초기값 할당하기
$(() => (limit_sc = $(".pgWrap").height()));
// 제이쿼리코드구역에 초기값 body가로크기를 할당함!

// 4. 스크롤 애니메이션 시간
const dur_sc = 2000;
// 광스크롤금지시간===스크롤애니시간

// 5. 스크롤 이징
const easing_sc = "easeOutQuint";
// easeIn...으로 셋팅하면 스크롤시 답답하게 움직임
// easeOut...으로만 셋팅되면 처음에 경쾌하게 움직임!

// 6. 멈춤 상태값 : 전체 스크롤 멈춤
let stopSts = 0; //0-허용,1-멈춤

// 7. 서브장면번호
let subnum = 0;

// 8. 서브 광스크롤 막기
let protSub = 0; //0-허용,1-불허용

$(() => {
    // console.log("스크롤한계값:", limit_sc);

    // let tg = $(".page").eq(5).offset().top;
    let tg = 1900;
    console.log("타겟위치:", tg);

    $(".wrap").on("mousewheel wheel", function (e) {
        e.preventDefault();
        // let scTop = $(this).scrollTop();
        // console.log(scTop);

        // e 이벤트 전달변수 처리하기
        e = window.event || e;
        // 뒤위 2가지 값 중 유효한 값이 e에 재할당됨!
        // window.event 는 오리지널 윈도우 이벤트임

        /******************************* 
            1. 마우스 휠 방향 알아내기!
        *******************************/
        let delta = e.wheelDelta || e.detail;
        /**************************************** 
            1.5. 파이어폭스는 방향부호가 반대임!
            방법: JS 내장함수 test() 를 사용하여
            브라우저 정보를 읽어오는 
            navigator.userAgent를 사용!
            브라우저 정보안에 "Firefox"라는 정보가
            있으면 test()에서 true를 리턴함!
            그래서 파이어폭스인지 구분함!

            [ test() 정규식 메서드 ]
            정규식.test(값) -> 값 문자열에 정규식문자가
            있는지 검사하여 있으면 true처리!

            [ 간단한 정규식 표현기호 ]
            1. 정규식 내용은 따옴표를 쓰지 않고 슬래쉬 사이에 씀
            2. 모든 패턴문자열을 찾을때는 g라는 플래그문자를 씀
            3. 대소문자 구분없이 찾을때는 i라는 플래그문자를 씀
            예)
            /,/g -> 모든 콤마를 찾아라
            /firefox/i -> 대소문자관계없이 'firefox'를 찾아라
            /my/gi -> 대소문자관계없이 'my'문자를 모두 찾아라

            ****************************************/
        //    console.log("브라우저 정보:",navigator.userAgent);
        //    console.log("정보여부:",
        //    /firefox/i.test(navigator.userAgent));

        // 파이어폭스 브라우저이면 델타값 부호를 반대로 한다!
        if (/firefox/i.test(navigator.userAgent)) {
            delta = -delta; // 변수앞에 마이너스는 부호반대
        } ////////////// if ////////////////////////

        // 타겟위치 보다 크면 멈춤상태전환(스크롤멈춤!)
        if (cnt_sc * unit_sc >= tg 
        && cnt_sc * unit_sc < tg+200
        && protSub === 0) {
            stopSts = 1;
        } ///// if //////////

        /**************************************** 
            2. 방향에 따른 페이지번호 증감하기
        ****************************************/
        if (delta < 0 && !stopSts) {
            // 음수면 스크롤 아랫방향(다음페이지)
            // 스크롤횟수*단위이동값 크기가
            // 전체크기보다 작을때만 ++처리함!
            if (cnt_sc * unit_sc < limit_sc) cnt_sc++;
        } ////////// if ///////////
        else if (delta > 0 && !stopSts) {
            // 양수면 스크롤 윗방향(이전페이지)
            cnt_sc--;
            if (cnt_sc < 0) cnt_sc = 0; // 첫번호에 고정
        } //////// else /////////////

        console.log("스크롤횟수:", cnt_sc);

        /*********************************************** 
            3. 페이지 가로값에 곱하여 스크롤 이동하기 
        ***********************************************/
        // 이동할 위치 -> 이동단위*스크롤횟수
        let pos = unit_sc * cnt_sc;

        console.log("서브장면번호:", subnum);
        console.log("멈춤상태:", stopSts);
        console.log("서브잠금:", protSub);

        // stopSts===1 일때 즉, 멈춤상태일때 서브넘기기
        if (stopSts) {
            // 서브 광스크롤 막기
            if (protSub) return;
            protSub = 1;

            $(".sub")
                .eq(subnum)
                .animate(
                    {
                        // 스크롤방향이 아랫방향이면 top:0으로 올라옴
                        top: (delta < 0 ? 0 : 100) + "%",
                        // 스크롤방향이 윗방향이면 top:100%로 내려감
                    },
                    800,
                    easing_sc,
                    () => {
                        protSub = 0; //해제
                    }
                );

            // 방향에 따른 서브번호 증감!
            if (delta < 0) { // 아랫방향은 서브번호증가
                subnum++;
                if (subnum > 3) { // 서브한계값
                    subnum = 3;
                    // 서브1 top값: 위로올라가는 조건 높이값과 같을때
                    let sb1 = parseInt($(".sb4").css("top"));
                    console.log("서브1top값:"+sb1);
                    if(sb1==0){
                        stopSts = 0;//스크롤멈춤해제!
                        setTimeout(()=>protSub = 0,1000);
                        //서브잠금해제(조금 있다가 풀어준다!)
                    }
                }
            } else if (delta > 0) { // 윗방향은 서브번호감소
                subnum--;
                if (subnum < 0) { // 서브한계값
                    subnum = 0;
                    // 서브1 top값: 위로올라가는 조건 높이값과 같을때
                    let sb1 = parseInt($(".sb1").css("top"));
                    let sb1H = Math.floor($(".sb1").height());
                    console.log("서브1top값:"+sb1);
                    console.log("서브1height값:"+sb1H);
                    if(sb1==sb1H){
                        stopSts = 0;//스크롤멈춤해제!
                        setTimeout(()=>protSub = 0,1000);
                        //서브잠금해제(조금 있다가 풀어준다!)
                    }
                }
            }
        } /// if //////
        else {
            // 스크롤 이동
            $("html,body")
                .stop()
                .animate(
                    {
                        scrollTop: pos + "px",
                    },
                    dur_sc,
                    easing_sc
                );
        } /// else ///
    }); //// mousewheel /////
}); ////// jQB ///////