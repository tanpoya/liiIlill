$(() => {

    // 헤더 / 네비 업다운
    let hdud;
    let lastSc = 0;
    let delta = 5; // 스크롤이 100마다 움직이는데 5 이상 움직일때
    let navbarHeight = $("header").outerHeight();
    // console.log(st);

    $(window).scroll(function (e) {
        hdud = true;
        // console.log(e);
        // console.log(hdud);
    });

    setInterval(function () {
        if (hdud) {
            hdudS();
            hdud = false;
            // console.log(hdud);
        }
    }, 250);


    // 미디어쿼리 모바일 전환 js 삭제
    // 윈도우 가로 크기가 모바일 사이즈면 코드를 변경한다!
    // 모바일일때 적용하고 싶거나 싶지않으면 mobsts값을 활용한다!
    // 모바일일때 1, 모바일이 아닐때 0 (가로크기 500기준)
    let mobsts = 0;
    if ($(window).width() <= 500) mobsts = 1;
    console.log("모바일적용여부:", mobsts);
    


    /* 
        스크롤 방향에 따라 헤더 업/다운
        햄버거버튼 접기
    */
    function hdudS() {
        let st = $(this).scrollTop();
        // Math.abs 절대값
        // 0 - 현재위치 <= 5
        if (Math.abs(lastSc - st) <= delta) { console.log("abs"); return;}

        if (st > lastSc && st > navbarHeight && mobsts === 0) {
            $("header").removeClass("nav-down").addClass("nav-up");

                setTimeout(() => {
                    $(".gnb-nav, .ham").removeClass("hon");
                }, 250);
                Hoff();

        } else {
            $("header").removeClass("nav-up").addClass("nav-down");
        }
        lastSc = st;
    }

    // 햄버거버튼 연속클릭 금지
    let honS = 0;

    // const ham = $(".ham");
    $(".ham").click(function() { // this를 사용할때는 화살표함수 사용 ㄴㄴ
        
        if(honS) return;
        honS = 1;
        setTimeout(() => (honS = 0), 500);

        if(mobsts === 0) {
            $(this).toggleClass("hon");
            $(".gnb-nav").toggleClass("hon");
            
            if($(".gnb-nav").hasClass("hon")) {
                Hon();
            } else {
                Hoff();
            }
        } else if(mobsts === 1) {
            $(".mgnb-nav").toggleClass("mon");
        }
    });

    const Hon = function() {
        setTimeout(() => {
            $(".gnb_ul").css({
                left: "0",
                transition: "left 1s"
            })
        }, 200);
    }

    const Hoff = function() {
        setTimeout(() => {
            $(".gnb_ul").css({
                left: "-50%"
            })
        }, 0);
    }


    $(".nbtn a").click(function (e) {
        e.preventDefault();

        let x = $(this).attr("href");
        // console.log(x);

        let pos = $(x).offset().top;
        // offset().top - top 위치값 리턴
        // console.log("id 위치:", pos);

        $("html, body").animate(
            {
                scrollTop: pos + "px",
            },
            0,
            "easeOutQuart"
        );
    });



    // startSS();

    const rimg = $(".rimg");
    // console.log(rimg);

    const fadeImg = () => {
        // console.log("들어옴~!");
        $(rimg[2])
            .delay(1500)
            .fadeOut(2000, function () {
                $(rimg[1])
                    .delay(1500)
                    .fadeOut(2000, function () {
                        $(rimg[0]).delay(1500).fadeOut(2000),
                            $(rimg[2])
                                .delay(1500)
                                .fadeIn(2000, () => {
                                    // 기존 style값을 모두 없앰!
                                    rimg.attr("style", "");

                                    // 자기자신함수 다시호출
                                    fadeImg();
                                });
                    });
            });
    };
    fadeImg();

    /*  // 변수셋팅 순번변수
    let sno = 0;
    // 인터발용 변수
    let autoI;
    // 타임아웃용 변수
    let autoT;

    function sildeAuto() {
        autoI = setInterval(() => {
            // 순번증가
            sno++;

            // 한계값체크
            if(sno === rimg.length) sno = 0;

            // 해당순번(sno) 클래스(on)넣기
            rimg.eq(sno).addClass("on").siblings().removeClass("on");

        }, 2500);
    }
    sildeAuto();
    // index.html rimg 하나에 클래스 on
    // style.css 179~185 주석풀기
    */

    const abox = $(".abox");
    const iimg = $(".abox_iimg");

    // console.log(abox);
    // console.log(iimg);

    for (let i = 0; i < abox.length; i++) {
        $(abox[i]).mouseenter(function () {
            $(iimg[i]).css({
                transform: "translateY(0)",
                transition: "transform 0.5s ease-out",
            });
            prota = 1;
            console.log("over:", prota);
        });
        $(abox[i]).mouseleave(function () {
            prota = 0;
            $(iimg[i]).css({
                transform: "translateY(100vh)",
                transition: "transform 0.5s ease-in",
            },);
            setTimeout(trasnR, 400);
        });
        
        let prota = 0;

    function trasnR() {
        if(prota) return;
        prota = 1;
        if(prota) {
            $(iimg[i]).css({
                transform: "translateY(-100vh)",
                transition: "none"
            });
        }
        // setTimeout(()=>(prota = 0), 800);
        console.log("out:", prota);
    }
} // for ///


    const i2b_cb = $(".i2b_cb");
    const buynow = $(".buynow");
    const buy = $(".buy");
    const edition_sw = $(".edition-sw");
    // console.log(i2b_cb);
    const i2bColor = [
        "white",
        "red",
        "pink",
        "white",
        "yellow",
        "white",
        "mediumspringgreen",
        "bisque",
        "white",
        "darkred",
    ];
    const i2bColor2 = [
        "black",
        "white",
        "black",
        "darkturquoise",
        "black",
        "black",
        "darkblue",
        "rgb(212, 141, 183)",
        "rgb(58, 187, 206)",
        "white",
    ];

    i2bColor.forEach((ele, idx) => {
        // console.log(ele, idx);
        $(i2b_cb[idx]).css({
            color: `${ele}`,
        }), // i2b_cb 색변경
            $(buynow[idx]).css({
                backgroundColor: `${ele}`,
            }), // buynow css
            i2bColor2.forEach((e, i) => {
                $(buy[i]).css({
                    color: `${e}`,
                });
            }),
            $(edition_sw[idx]).css({
                color: `${ele}`,
            });
        });


        /* 모바일일때 버튼 눌러서 그림 넘기기 */

        // 누를때마다 변수에 담기...
        // 음..
        // if 누를때 오른쪽으면 -36deg 왼쪽이면 +36deg <- 생각중인거
        // 근데 어케 구현하지
        // 일단 완료 근데 뭔가 맘에 안들어
        // Rotate 계속 중첩됨 => 한바퀴 돌고 한번 더 오른쪽으로 이동하면 396deg됨

        let itpg2_box = $(".itpg2_box");
        let Rotate = 0;
        let prot = 0;

        
        $(".abtn").click(function() {
            if($(this).hasClass("rbtn")) {
                // console.log("오른쪽버튼");

                if(prot) return
                prot = 1;
                setTimeout(()=>prot = 0, 600);
                
                Rotate -= 36;
                $(".itpg2").css({
                    transform: `rotateY(${Rotate}deg)`
                });
            } else {
                // console.log("왼쪽버튼");

                if(prot) return
                prot = 1;
                setTimeout(()=>prot = 0, 600);
                
                Rotate += 36;
                $(".itpg2").css({
                    transform: `rotateY(${Rotate}deg)`
                });
            }
            console.log(Rotate + "도");
        })
});

// i2bColor2.forEach((e, i) => {
//     $(i2b_cb[i]).css({
//         color: `${e}`
//     })
// })

// https://lpla.tistory.com/157

// https://webisfree.com/2014-09-07/[jquery]-%EC%A0%88%EB%8C%80%EC%A2%8C%ED%91%9C-%EB%B0%8F-%EC%83%81%EB%8C%80%EC%A2%8C%ED%91%9C-%ED%99%95%EC%9D%B8-%EB%B0%8F-%EC%9D%B4%EB%8F%99%ED%95%98%EA%B8%B0-offset()-position()
// let aboxImg = iimg.position().top
// console.log(aboxImg);





