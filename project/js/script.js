$(()=>{

    const rimg = $(".rimg");
    console.log(rimg);


    $(document).ready(function(){
        $(rimg[2]).delay(1500).fadeOut(2000, function(){
            $(rimg[1]).delay(1500).fadeOut(2000, function(){
                $(rimg[0]).delay(1500).fadeOut(2000), $(rimg[2]).delay(1500).fadeIn(2000, function(){
                    $(rimg[2]).delay(1500).fadeOut(2000), $(rimg[1]).delay(1500).fadeIn(2000)
                });
            });
        });
    });

    



    
    
});

/*

1. intro_list_tbox_img 이미지

1) 대상: index.html 102번째 이미지 3개 (intro_list_tbox_img .rimg #rimg 1 2 3)
2) 이벤트: fade in/out
3) 이벤트시: 세개의 이미지들이 순서대로
1.5초 간격으로 사라짐(무한루프)

2. abox_img 처리

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