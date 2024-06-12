// var car1 = 'BMW'
// var car2 = 133

var x = 10
var y = 20
v

if (x < y) {
    console.log("x is less than y");
} else {
    console.log("x is not less than y");
}

const time = new Date().getHours();
let greeting;
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
document.getElementById("demo").innerHTML = greeting;


var day = prompt('Enter a number:');
switch (day) {
    case "1":
        alert("Day is Monday");
        break;
    case "2": alert("Day is Tuesday");
        break;
    case "3":
        alert("Day is Wednesday");
        break;
    case "4":
        alert("Day is Thursday");
        break;
    case "5":
        alert("Day is Friday");
        break;
    case "6":
        alert("Day is Saturday");
        break;
    case "7":
        alert("Day is Sunday");
        break;
    default:
        alert("Not a valid number");
        break;
}


// console.log(!(x==20 || y==20));
let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("loop").innerHTML = text;

console.log(isNaN(1223));
console.log(parseInt("Welcome 1234 50 and"));
console.log(parseInt("122 Welcome 1234 50 and"));
 const a = 40
 const b = 30
 console.log(eval(a*b));


 function areaOfRect(length, breath) {
    const Area = length*breath
    return Area
 }
 alert("Area of rectangle is"+ areaOfRect(13,122))
 console.log(areaOfRect(13,12));
//or
const areaRect = (L, B) =>{
    const area= L*B
    return area
}
console.log("Area of reactangle :"+ areaRect(12,21));

// document.getElementById("car").innerHTML ="Your school fees balance is"+ car1 +" "+car2