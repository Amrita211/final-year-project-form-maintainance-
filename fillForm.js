function yesnoCheck(that) {
    if (that.value == "placement") {
//   alert("check");
        document.getElementById("ifYes").style.display = "block";
    } 
    else {
        document.getElementById("ifYes").style.display = "none";
    }
    if(that.value == "competitive"){
        document.getElementById("ifExam").style.display = "block";
    }
    else {
        document.getElementById("ifExam").style.display = "none";
    }
}

// exam check
function ExamCheck(that){
    if(that.value == "competitive"){
        document.getElementById("ifExam").style.display = "block";
    }
    else {
        document.getElementById("ifExam").style.display = "none";
    }
}