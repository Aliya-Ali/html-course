// let num =2 
// if (num<10){
//     console.log("nums is less than 10")
// }else{
//     console.log("num is greater than 10")
// }
let num =5
let num2 = 5
if (num == 5 || num2 == 5){
    console.log("either num or num2 is equal to 5")
}
if (!(num== num2)){
    console.log("nums and num2 values are equal")
}

// day = "Monday"
// if (day =="Monday"){
//     console.log("right day")
// }
// else if (day == "Tuesday"){
//     console.log("wrong day")
// }
// else if (day == "Wednesday"){
//     console.log("wrong day")
// }
// else if (day == "Thursday"){
//     console.log("wrong day")
// }
// else if (day == "Friday"){
//     console.log("wrong day")
// }
// else if (day == "Saturday"){
//     console.log("wrong day")
// }
// else if (day == "Sunday"){
//     console.log("wrong day")
// }
day = "Monday"
switch(day){
    case "Monday":
        console.log("correct day")
        break;
    case "Tuesday":
        console.log("wrong day")
        break;
    case "Wednesday":
        console.log("wrong day")
        break;
    case "Thursday":
        console.log("wrong day")
        break;
    case "Friday":
        console.log("wrong day")
        break;
    case "Saturday":
        console.log("wrong day")
        break;
    case "Sunday":
        console.log("wrong day")
        break;
}
for (let i =0; i<10; i++){
    console.log("2 X "+ i + " = " + 2*i )
}
