// 랜덤 이미지 웹경로 배열 //
const rimg = [
    "https://img.etnews.com/photonews/2110/1461216_20211007085904_466_0001.jpg",
    "https://d2qqqnyszmt41w.cloudfront.net/wp-content/uploads/2021/04/23150534/202104231445162082.jpg",
    "https://img.imbc.com/adams/Program/202111/132804027350463581.jpg",
    "https://image.ytn.co.kr/general/jpg/2021/0925/202109251350012465_d.jpg"
];

// 배열이 4개니까 0~3까지의 랜덤수 필요!

// 변경대상: 랜덤 이미지 박스 -> .imbx
let imbx = document.querySelector(".imbx");

// 직전랜덤수 담을 변수
let bnum = 99999;
// 초기값은 0~3 사이수가 아닌 아무수!(처음엔 통과)

/****************************************** 
   함수명: insImg
   기능: 박스에 랜덤 이미지 넣기
******************************************/
const insImg = () => {

    // 1. 랜덤수 만들기 : 0 ~ 3 사이의 난수
    // 먼저 1~4 의 난수를 생각함! 최대수 4
    // Math.floor() 내림적용으로 0~3난수 발생!
    let rnum = Math.floor(Math.random() * 4);

    console.log("랜덤수:", rnum);

    // 2. 랜덤수가 바로 직전수와 같으면 다시발생하기
    // 직전랜덤수를 담을 변수를 함수 바깥에 생성
    // while(조건){코드}
    // 조건 : 현재 발생한 랜덤수가 직전랜덤수와 같은가?
    // 만약 true이면 다시발생!
    while (rnum === bnum) {
        rnum = Math.floor(Math.random() * 4);
        console.log("다시난수:", rnum);
    } //////// while문 ////////////////

    // while문 통과 후 rnum을 bnum에 반드시 할당!
    bnum = rnum;
    // 다음번에 비교사용!

    // 3. 랜덤 이미지 넣기
    // 대상 : .imbx -> imbx변수
    imbx.innerHTML =
        `<img src="${rimg[rnum]}" alt="랜덤이미지">`;

}; ////////////// insImg 함수 ///////////////

// 랜덤 이미지 넣기 함수 최초호출
insImg();

// 인터발함수로 호출
setInterval(insImg, 1500);


// 임시 호출
//  window.onclick = () => insImg();