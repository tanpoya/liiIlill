$(() => {

    // $(this).scroll(function(e) {
    //     console.log($(this).scrollTop());
    // })

    // let scTop = 0;

    $(".nbtn a").click(function(e) {
        e.preventDefault();

        let x = $(this).attr("href");
        // console.log(x);

        let pos = $(x).offset().top;
        // offset().top - top 위치값 리턴
        // console.log("id 위치:", pos);
       
        $("html, body").animate({       
            scrollTop: pos + "px"
        }, 0, "easeOutQuart");
    });

    // 스크롤 위치변수
    let scTop;
    let scNum = $(".counter_box_num");
    console.log(scNum);
    let cbnum = $(".cbnum");
    // let cnum;
    const scpos = [];

    let cbir = $(".cbir");
    console.log(cbir);

    // console.log(cbnum)

    // 스크롤 위치 확인
    $(window).scroll(function() {
        scTop = $(this).scrollTop();
        console.log(scTop);
        
        // cbtxtI.each((idx, ele)=>{
            // console.log("순번: ", idx, " ", "요소: ", ele)
            
        // .cbnum 하나로 text() 변경만 해서 가능할지도..?
        if(scTop < 1100) {
            cbnum.removeClass("non");
            cbnum.eq(0).addClass("non");

            cbir.eq(0).addClass("cbirn");
            cbir.eq(10).addClass("cbirn");
            cbir.eq(0).next().removeClass("cbirn");
            cbir.eq(10).next().removeClass("cbirn");
        } else if(scTop < 1200) {
            cbnum.removeClass("non");
            cbnum.eq(1).addClass("non");
            
            cbir.eq(1).addClass("cbirn");
            cbir.eq(11).addClass("cbirn");
            cbir.eq(1).next().removeClass("cbirn");
            cbir.eq(11).next().removeClass("cbirn");
        } else if(scTop < 1300) {
            cbnum.removeClass("non");
            cbnum.eq(2).addClass("non");
            
            cbir.eq(2).addClass("cbirn");
            cbir.eq(12).addClass("cbirn");
            cbir.eq(2).next().removeClass("cbirn");
            cbir.eq(12).next().removeClass("cbirn");
        } else if(scTop < 1400) {
            cbnum.removeClass("non");
            cbnum.eq(3).addClass("non");
            
            cbir.eq(3).addClass("cbirn");
            cbir.eq(13).addClass("cbirn");
            cbir.eq(3).next().removeClass("cbirn");
            cbir.eq(13).next().removeClass("cbirn");
        } else if(scTop < 1500) {
            cbnum.removeClass("non");
            cbnum.eq(4).addClass("non");
            
            cbir.eq(4).addClass("cbirn");
            cbir.eq(14).addClass("cbirn");
            cbir.eq(4).next().removeClass("cbirn");
            cbir.eq(14).next().removeClass("cbirn");
        } else if(scTop < 1600) {
            cbnum.removeClass("non");
            cbnum.eq(5).addClass("non");
            
            cbir.eq(5).addClass("cbirn");
            cbir.eq(15).addClass("cbirn");
            cbir.eq(5).next().removeClass("cbirn");
            cbir.eq(15).next().removeClass("cbirn");
        } else if(scTop < 1700) {
            cbnum.removeClass("non");
            cbnum.eq(6).addClass("non");
            
            cbir.eq(6).addClass("cbirn");
            cbir.eq(16).addClass("cbirn");
            cbir.eq(6).next().removeClass("cbirn");
            cbir.eq(16).next().removeClass("cbirn");
        } else if(scTop < 1800) {
            cbnum.removeClass("non");
            cbnum.eq(7).addClass("non");
            
            cbir.eq(7).addClass("cbirn");
            cbir.eq(17).addClass("cbirn");
            cbir.eq(7).next().removeClass("cbirn");
            cbir.eq(17).next().removeClass("cbirn");
        } else if(scTop < 1900) {
            cbnum.removeClass("non");
            cbnum.eq(8).addClass("non");
            
            cbir.eq(8).addClass("cbirn");
            cbir.eq(18).addClass("cbirn");
            cbir.eq(8).next().removeClass("cbirn");
            cbir.eq(18).next().removeClass("cbirn");
        } else if(scTop < 2000) {
            cbnum.removeClass("non");
            cbnum.eq(9).addClass("non");
            
            cbir.eq(9).addClass("cbirn");
            cbir.eq(19).addClass("cbirn");
        }
    /* }); */ /// each ////
    }); // scroll

    cbnum.each((idx, ele) => {
        // console.log("순번: ", idx, "|", "요소: ", ele);
        scpos[idx] = $(ele).offset().top;
    });
    // console.log(scpos);

    const i2box = $(".itpg2_box");

    



});