// forEach 연습
const arc = ["소서리스", "바드", "서머너", "아르카나"];

arc.forEach((ele, idx) => {
    console.log(idx);
    console.log(ele);
    
    if(ele === "소서리스") {
        console.log("점화");
    } else if(ele === "바드") {
        console.log("절구");
    } else if(ele === "서머너") {
        console.log("상소");
    } else if(ele === "아르카나") {
        console.log("황후");
    }
});