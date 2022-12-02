$(() => {
    
    let a = 1;

    // 헤더 / 네비 업다운
    let hdud;
    let lastSc = 0;
    let delta = 5; // 스크롤이 100마다 움직이는데 5 이상 움직일때
    let navbarHeight = $("header").outerHeight();
    // console.log(st);
    
    $(window).scroll(function(e) {
        hdud = true;
        // console.log(e);
        // console.log(hdud);
    });
    
    setInterval(function() {
        if(hdud) {
            hdudS();
            hdud = false;
            // console.log(hdud);
        }
    }, 250);

    function hdudS() {

        let st = $(this).scrollTop();
        // Math.abs 절대값
        // 0 - 현재위치 <= 5
        if(Math.abs(lastSc - st) <= delta) return;

        if(st > lastSc && st > navbarHeight) {
            $("header").removeClass("nav-down").addClass("nav-up");
        } else {
                $("header").removeClass("nav-up").addClass("nav-down");
        }
        lastSc = st;
    }


    // startSS();

    const rimg = $(".rimg");
    // console.log(rimg);

    const fadeImg = () => {
        console.log("들어옴~!");
        $(rimg[2]).delay(1500).fadeOut(2000, function () {

                $(rimg[1]).delay(1500).fadeOut(2000, function () {

                        $(rimg[0]).delay(1500).fadeOut(2000),

                            $(rimg[2]).delay(1500).fadeIn(2000, () =>{ 

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
    
    /* 
    abox 오버시 각 abox에 해당하는 iimg가
    위에서 중간으로 멈췄다가 아웃시 내려감
    */
   for(let i = 0; i < abox.length; i++) {
    $(abox[i]).mouseover(function() {
        $(iimg[i]).css({
            transform: "translateY(0)",
            transition: "transform 0.5s ease-out",
        })
        // iimg.each((idx, ele) => {
            //     abcp[idx] = $(ele).offset().top;
            //     console.log("오버시: ", abcp[idx]);
            // });
        });
        $(abox[i]).mouseout(function() {
            $(iimg[i]).css({
                transform: "translateY(100vh)",
                transition: "transform 0.5s ease-in"
            })
            // iimg.each((idx, ele) => {
                //     abcp[idx] = $(ele).offset().top;
                //     console.log("아웃시: ", abcp[idx]);
                // });
            });
        };

        const i2b_cb = $(".i2b_cb");
        const buynow = $(".buynow");
        const buy = $(".buy");
        const edition_sw = $(".edition-sw");
        // console.log(i2b_cb);
        const i2bColor = ["white", "red", "pink", "white", "yellow", "white", "mediumspringgreen", "bisque", "white", "darkred"];
        const i2bColor2 = ["black", "white", "black", "darkturquoise", "black", "black", "darkblue", "rgb(212, 141, 183)", "rgb(58, 187, 206)", "white"];

        i2bColor.forEach((ele, idx) => {
            // console.log(ele, idx);
            $(i2b_cb[idx]).css({
                color: `${ele}`
            }), // i2b_cb 색변경
            $(buynow[idx]).css({
                backgroundColor: `${ele}`
            }), // buynow css
            i2bColor2.forEach((e, i) => {
                $(buy[i]).css({
                    color: `${e}`
                })
            }),
                $(edition_sw[idx]).css({
                    color: `${ele}`
                })
        });
                    
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