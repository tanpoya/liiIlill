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
        // console.log(scTop);

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

        // 6. 멈춤 상태값 : 전체 스크롤 멈춤
        let stopSts = 0; //0-허용,1-멈춤

        // 8. 서브요소
        let subele = $(".itpg2_box");

        // 9. 보정값(7vh값으로 계산)
        let gap = $(window).height() * 0.07;

        // 휠중접 막기
        let protSts = 0;

        const a = 1;
        if (scTop >= 1800 && !a) {
            $(".page_home").on("mousewheel wheel", function (e) {
                stopSts = 1;

                if (stopSts) e.preventDefault();

                if (protSts) return;

                protSts = 1;
                setTimeout(() => (protSts = 0), 2000);

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
                // $("html,body")
                //     .stop()
                //     .animate(
                //         {
                //             scrollTop: subele.eq(subnum).offset().top - gap + "px",
                //         },
                //         100,
                //         easing_sc
                //     );

                /**************************************** 
                2. 방향에 따른 페이지번호 증감하기
                ****************************************/

                // const options = {
                //     root: null, // viewport
                //     rootMargin: "0px",
                //     threshold: 1.0,  // 50%가 viewport에 들어와 있어야 callback 실행
                //   }
                  
                //   const observer = new IntersectionObserver(entries => {
                //     entries.forEach(entry => {
                //       if (entry.isIntersecting) {
                //         entry.target.classList.add('active');
                //       } else {
                //         entry.target.classList.remove('active');
                //       }
                //     });
                //   }, options);
                  
                //   // 반복문을 돌려 모든 DOM에 적용
                //   subele.forEach(el => observer.observe(el));
                

                for (let i = 0; i < subele.length; i++) {
                    // 셋팅값 방향에 따른 변경
                    if (delta < 0 && !stopSts) {
                        $(subele[i]).css({
                            trnasform: "translate"
                        })
                        console.log("1");
                    } else if (delta > 0 && stopSts) {

                        // if ("") $(".page_home").off("mousewheel wheel");
                    }
                }
            }); //// mousewheel /////
        } // if
    }); // scroll
}); ////// jQB ///////