$(() => {
    // $(this).scroll(function(e) {
    //     console.log($(this).scrollTop());
    // })

    // let scTop = 0;

    // 스크롤 위치변수
    let scTop;
    let cbnum = $(".cbnum");
    // let cnum;

    let cbir = $(".cbir");
    // console.log(cbir);

    // console.log(cbnum)

    // 스크롤 위치 확인
    $(window).scroll(function () {
        scTop = $(this).scrollTop();
        console.log(scTop);

        if (scTop < 1000) {
            cbnum.removeClass("non");
            cbnum.eq(0).addClass("non");

            cbir.eq(0).addClass("cbirn");
            cbir.eq(10).addClass("cbirn");
            cbir.eq(0).next().removeClass("cbirn");
            cbir.eq(10).next().removeClass("cbirn");
        } else if (scTop < 1100) {
            cbnum.removeClass("non");
            cbnum.eq(1).addClass("non");

            cbir.eq(1).addClass("cbirn");
            cbir.eq(11).addClass("cbirn");
            cbir.eq(1).next().removeClass("cbirn");
            cbir.eq(11).next().removeClass("cbirn");
        } else if (scTop < 1200) {
            cbnum.removeClass("non");
            cbnum.eq(2).addClass("non");

            cbir.eq(2).addClass("cbirn");
            cbir.eq(12).addClass("cbirn");
            cbir.eq(2).next().removeClass("cbirn");
            cbir.eq(12).next().removeClass("cbirn");
        } else if (scTop < 1300) {
            cbnum.removeClass("non");
            cbnum.eq(3).addClass("non");

            cbir.eq(3).addClass("cbirn");
            cbir.eq(13).addClass("cbirn");
            cbir.eq(3).next().removeClass("cbirn");
            cbir.eq(13).next().removeClass("cbirn");
        } else if (scTop < 1400) {
            cbnum.removeClass("non");
            cbnum.eq(4).addClass("non");

            cbir.eq(4).addClass("cbirn");
            cbir.eq(14).addClass("cbirn");
            cbir.eq(4).next().removeClass("cbirn");
            cbir.eq(14).next().removeClass("cbirn");
        } else if (scTop < 1500) {
            cbnum.removeClass("non");
            cbnum.eq(5).addClass("non");

            cbir.eq(5).addClass("cbirn");
            cbir.eq(15).addClass("cbirn");
            cbir.eq(5).next().removeClass("cbirn");
            cbir.eq(15).next().removeClass("cbirn");
        } else if (scTop < 1600) {
            cbnum.removeClass("non");
            cbnum.eq(6).addClass("non");

            cbir.eq(6).addClass("cbirn");
            cbir.eq(16).addClass("cbirn");
            cbir.eq(6).next().removeClass("cbirn");
            cbir.eq(16).next().removeClass("cbirn");
        } else if (scTop < 1700) {
            cbnum.removeClass("non");
            cbnum.eq(7).addClass("non");

            cbir.eq(7).addClass("cbirn");
            cbir.eq(17).addClass("cbirn");
            cbir.eq(7).next().removeClass("cbirn");
            cbir.eq(17).next().removeClass("cbirn");
        } else if (scTop < 1800) {
            cbnum.removeClass("non");
            cbnum.eq(8).addClass("non");

            cbir.eq(8).addClass("cbirn");
            cbir.eq(18).addClass("cbirn");
            cbir.eq(8).next().removeClass("cbirn");
            cbir.eq(18).next().removeClass("cbirn");
        } else if (scTop < 1900) {
            cbnum.removeClass("non");
            cbnum.eq(9).addClass("non");

            cbir.eq(9).addClass("cbirn");
            cbir.eq(19).addClass("cbirn");
        }

        // 5. 스크롤 이징
        const easing_sc = "easeOutQuint";

        // 8. 서브요소
        let subele = $(".itpg2_box");

        // 9. 보정값(7vh값으로 계산)
        let gap = $(window).height() * 0.07;

        // const a = 1;
        if (scTop >= 1800) {
            scAct();
        } // if
    }); // scroll

    // 스크롤 한계값 => 페이지전체길이 - 화면height크기
    let limit = $(document).height() - $(window).height();
    console.log("스크롤한계값:", limit);

    // 아이템 페이지 순번
    let itnum = 0;

    // 6. 멈춤 상태값 : 전체 스크롤 멈춤
    let stopSts = 0; //0-허용,1-멈춤

    // 휠중접 막기
    let protSts = 0;

    // 아이템 페이지 개수
    let itcnt = $(".itpg2_box").length;
    console.log("아이템개수:", itcnt);

    function scAct() {
        $(".page_home").on("mousewheel wheel", function (e) {
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

            // 스크롤 한계값이상이고 스크롤이 아랫방향이면...
            if (scTop >= limit) {
                if (stopSts) e.preventDefault();
                else $(this).unbind("mousewheel wheel");

                stopSts = 1;

                if (protSts) return;
                protSts = 1;
                setTimeout(() => (protSts = 0), 600);

                console.log("작동이야~~!", itnum);

                // 스크롤 내릴때 ///////
                if (delta < 0) {
                    $(".itpg2_box").eq(itnum).animate({ top: "-100%" }, 600);
                    itnum++;
                    if (itnum > itcnt) itnum = itcnt;

                    if (itnum == 10) {
                        $("footer").animate({ top: "50%" }, 400);
                        $(".itpgWrap").animate({ top: "50%" }, 400);
                    }

                } 
                // 스크롤 올릴때 ///////
                else {
                    $(".itpg2_box").eq(itnum).animate({ top: "0" }, 600);
                    itnum--;
                    if (itnum < -1) itnum = 0;

                    
                    if (itnum <= 9) {
                        $("footer").animate({ top: "100%" }, 400);
                        $(".itpgWrap").animate({ top: "100%" }, 400);
                    }


                    if(itnum <= 0){
                        stopSts = 0;// 스크롤잠금해제!
                    }
                    console.log("스크롤잠금",stopSts);
                }
            }
        }); //// mousewheel /////
    }
}); ////// jQB ///////
