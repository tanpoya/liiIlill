$(() => {
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

    // 스크롤 위치변수
    let scTop;
    let lastSc= 0;
    const scpos = [];
    let  scNum = $(".counter_box_num");
    console.log(scNum);

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





// 스크롤 위치 확인
$(window).scroll(function() {
    abc = $(this).scrollTop();
    console.log(abc);
})























// https://lpla.tistory.com/157

// https://webisfree.com/2014-09-07/[jquery]-%EC%A0%88%EB%8C%80%EC%A2%8C%ED%91%9C-%EB%B0%8F-%EC%83%81%EB%8C%80%EC%A2%8C%ED%91%9C-%ED%99%95%EC%9D%B8-%EB%B0%8F-%EC%9D%B4%EB%8F%99%ED%95%98%EA%B8%B0-offset()-position()
// let aboxImg = iimg.position().top
// console.log(aboxImg);
// https://lpla.tistory.com/157




/*

1. intro_list_tbox_img 이미지 ** 컷

1) 대상: index.html 102번째 이미지 3개 (intro_list_tbox_img .rimg #rimg 1 2 3)
2) 이벤트: fade in/out
3) 이벤트시: 세개의 이미지들이 순서대로

2. abox_img 처리 * 진행중

1) 대상: abox_img
2) 이벤트: abox 마우스오버
3) 이벤트시: abox_img에 오버시 이미지가 위에서 중앙으로 내려왔다가
아웃시 중앙에서 밑으로 사라짐
(각 박스마다 이미지가 다름)



*/

// setInterval(()=> {
//     $(r3).fadeOut(1500);
//     $(r3).fadeIn(1500)
// }, 3000)

// for(let i = 0; i < 3; i++) {
//     if(i == 0) {
//         setInterval(()=>{
//             $(rimg[2]).fadeOut(1500)
//         }, 0)
//     } else if (i == 1) {
//         setInterval(()=>{
//             $(rimg[1]).fadeOut(1500)

//         }, 3000)
//     } else {
//         setInterval(()=>{
//             $(rimg[0]).fadeOut(1500)
//         }, 6000)
//     }

// }
});