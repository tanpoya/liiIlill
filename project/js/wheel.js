const a = 1; // 스크롤 휠 이벤트 잠금
            if (scTop > tg && !stopSts && !a) {
                stopSts = 1; // 잠금!
                console.log("휠호출!");
                // $("html,body").animate(
                //     {
                //         scrollTop: $(".itpg2_box").eq(1).offset().top + "px",
                //     },
                //     400
                // );
                    setTimeout(actWheel, 400);
            }

    }); // scroll


    // cbnum.each((idx, ele) => {
    //     // console.log("순번: ", idx, "|", "요소: ", ele);
    //     scpos[idx] = $(ele).offset().top;
    // });
    // console.log(scpos);

    // const i2box = $(".itpg2_box");

    // 5. 스크롤 이징
    const easing_sc = "easeOutQuint";
    // easeIn...으로 셋팅하면 스크롤시 답답하게 움직임
    // easeOut...으로만 셋팅되면 처음에 경쾌하게 움직임!

    // 6. 멈춤 상태값 : 전체 스크롤 멈춤
    let stopSts = 0; //0-허용,1-멈춤

    // 7. 서브장면번호
    let subnum = 0;
    // 8. 서브요소
    let subele = $(".itpg2_box");

    // 9. 보정값(7vh값으로 계산)
    let gap = $(window).height() * 0.07;

    // 8. 서브 광스크롤 막기
    // let protSub = 0; //0-허용,1-불허용

    let tg = Math.floor($(".tg").offset().top);
    console.log("타겟위치:", tg);

    // 휠중접 막기
    let protSts = 0;
    let tgH = $(".itpg2_box").height();
    console.log("타겟높이값:", tgH);

    function actWheel() {
        console.log("휠함수!!!");
        // 멈춤상태
        stopSts = 1;
        $(".page_home").on("mousewheel wheel", function (e) {
            if(stopSts) e.preventDefault();

            if (protSts) return;
            protSts = 1;
            setTimeout(() => (protSts = 0), 1600);

            // e 이벤트 전달변수 처리하기
            e = window.event || e;

            /******************************* 
            1. 마우스 휠 방향 알아내기!
            *******************************/
            let delta = e.wheelDelta || e.detail;
            //    /firefox/i.test(navigator.userAgent));
            // 파이어폭스 브라우저이면 델타값 부호를 반대로 한다!
            if (/firefox/i.test(navigator.userAgent)) {
                delta = -delta; // 변수앞에 마이너스는 부호반대
            } ////////////// if ////////////////////////

            /*********************************************** 
            3. 페이지 가로값에 곱하여 스크롤 이동하기 
            ***********************************************/
            
            // 스크롤 이동
            $("html,body")
                .stop()
                .animate(
                    {
                        scrollTop: subele.eq(subnum).offset().top - gap + "px",
                    },
                    100,
                    easing_sc
                );
            /**************************************** 
            2. 방향에 따른 페이지번호 증감하기
            ****************************************/
            // 셋팅값 방향에 따른 변경
            if (delta < 0) {
                subnum++;
                if (subnum >= subele.length) subnum = subele.length - 1;
                if(!subnum && delta < 0 && !stopSts) {
                    return actWheel();
                }
            } ////////// if ///////////
            else if (delta > 0) {
                subnum--;
                if (subnum < 0){
                    stopSts = 0;//잠금해제
                    subnum = 0;
                }
            } //////// else /// //////////

            if(subnum === subele.length - 1 && delta < 0 && stopSts) {
                stopSts = 0;
            }

            console.log("셋팅값:", subnum);
            console.log("서브페이지위치::", subele[subnum]);
            console.log("멈춤상태:", stopSts);
        }); //// mousewheel /////
    } // actWheel //