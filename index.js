const dateIn = document.querySelector("#dateinp");
const luckIn = document.querySelector("#luckynum");
const subBtn = document.querySelector("#btnSub");
const txtArea = document.querySelector("#op-styling")

subBtn.addEventListener("click", function resp() {

    var dob = dateIn.value;


    const luckNum = luckIn.value;
    // console.log(luckNum);
    var sum = 0;
    dob = dob.replaceAll("-", "");

    for (var i = 0; i < dob.length; i++) {

        sum += Number(dob.charAt(i));
    }

    console.log("sum=", sum)
    console.log("rem=", sum % luckNum);

    if (sum % luckNum === 0) {
        txtArea.innerHTML = "YaY, you're lucky in your own way! 🥳";
    } else {
        txtArea.innerHTML = "Well guess what, you have to create your own luck! 😉";
    }


})