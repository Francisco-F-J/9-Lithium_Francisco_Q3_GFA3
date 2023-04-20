//variable declarations and value assignments
let num1 = parseInt(Math.random()*20)+1;
let num2 = parseInt(Math.random()*20)+1;
let num3 = parseInt(Math.random()*20)+1;
let color1 = 0;
let color2 = 0;
let color3 = 0;
//placing variables' values inside the bodies of the three minicards
document.getElementById("cat_1-value").innerHTML = num1;
document.getElementById("cat_2-value").innerHTML = num2;
document.getElementById("cat_3-value").innerHTML = num3;
//declaring largest number out of the three values
let max_val = Math.max(num1, num2, num3);
//assigning colors (butterfly to be subjected to racism???)
if(max_val == num1) {
    color1 = "Red";
};
if(max_val == num2) {
    color2 = "Yellow";
}; 
if(max_val == num3) {
    color3 = "White";
};
//printing the color texts to the HTML's first sentence's "dom_col" elements
switch(color1) {
    case 0:
        const rem1 = document.getElementById("dom_col1");
        rem1.remove();
        break;
    default:
        document.getElementById("dom_col1").innerText = " " + color1;
        break;
};
switch(color2) {
    case 0:
        const rem2 = document.getElementById("dom_col2");
        rem2.remove();
        break;
    default:
        document.getElementById("dom_col2").innerText = " " + color2;
        break;
};
switch(color3) {
    case 0:
        const rem3 = document.getElementById("dom_col3");
        rem3.remove();
        break;
    default:
        document.getElementById("dom_col3").innerText = " " + color3;
        break;
};
//The comma system
//if maximum value is red
if(max_val !== num2 && max_val !== num3) {
    const remcom1 = document.getElementById("com1");
    remcom1.remove();
    const remcom2 = document.getElementById("com2");
    remcom2.remove();
}
//if maximum values are yellow and white
else if(max_val == num2 && max_val == num3) {
    const remcom1 = document.getElementById("com1");
    remcom1.remove();
};
//if maximum value is yellow
if(max_val !== num1 && max_val !== num3) {
    const remcom1 = document.getElementById("com1");
    remcom1.remove();
    const remcom2 = document.getElementById("com2");
    remcom2.remove();
}
//if maximum values are red and white
else if(max_val == num1 && max_val == num3) {
    const remcom1 = document.getElementById("com1");
    remcom1.remove();
};
//if maximum value is white
if(max_val !== num1 && max_val !== num2) {
    const remcom1 = document.getElementById("com1");
    remcom1.remove();
    const remcom2 = document.getElementById("com2");
    remcom2.remove();
}
//if maximum values are red and yellow
else if(max_val == num1 && max_val == num2) {
    const remcom2 = document.getElementById("com2");
    remcom2.remove();
};
//printing the dominant color value to the HTML's first sentence's "value" element
document.getElementById("value").innerText = " (" + max_val + ")";
//declaration of alphabetical order block
let letter = "/abcdefghijklmnopqrstuvwxyz"
//declaration of letter equivalent of value inside "red" minicard
let let_val = letter[num1];
//printing the letter equivalent of "red" minicard's value to the HTML's second sentence's "sent_val2" element
document.getElementById("sent_val2").innerText = " " + let_val;
//computations for "only minute" mode of time
let only_min = num2 * num3;
//computations for "hour and minute" mode of time
let rem_min = only_min % 60;
let only_hrs = (only_min - rem_min) / 60;
//if the number of both hours and minutes are more than 1
if(only_hrs > 1 && rem_min > 1) {
    document.getElementById("sent_val3").innerText = " " + only_hrs + "hrs. " + rem_min + "mins. (" + only_min + " mins.)";
};
//if the number of hours are more than 1 and the number of minutes is equal to 1
if(only_hrs > 1 && rem_min == 1) {
    document.getElementById("sent_val3").innerText = " " + only_hrs + "hrs. " + rem_min + "min. (" + only_min + " mins.)";
};
//if the number of hours is equal to 1 and the number of minutes is more than 1
if(only_hrs == 1 && rem_min > 1) {
    document.getElementById("sent_val3").innerText = " " + only_hrs + "hr. " + rem_min + "mins. (" + only_min + " mins.)";
};
//if the number of both hours and minutes are equal to 1
if(only_hrs == 1 && rem_min == 1) {
    document.getElementById("sent_val3").innerText = " " + only_hrs + "hr. " + rem_min + "min. (" + only_min + " mins.)";
};
//if the number of hours is equal to 0 and the number of minutes is more than 1
if(only_hrs == 0 && rem_min > 1) {
    document.getElementById("sent_val3").innerText = " " + only_min + " mins.";
};
//if the number of hours is equal to 0 and the number of minutes is equal to 1
if(only_hrs == 0 && rem_min == 1) {
    document.getElementById("sent_val3").innerText = " " + only_min + "min.";
};
//if the number of hours is more than 1 and the number of minutes is equal to 0
if(only_hrs > 1 && rem_min == 0) {
    document.getElementById("sent_val3").innerText = " " + only_hrs + "hrs. (" + only_min + " mins.)";
};
//if the number of hours is equal to 1 and the number of minutes is equal to 0
if(only_hrs == 1 && rem_min == 0) {
    document.getElementById("sent_val3").innerText = " " + only_hrs + "hr. (" + only_min + " mins.)";
};