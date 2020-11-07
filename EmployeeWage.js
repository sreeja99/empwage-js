//UC2 Switch case
//UC3 Refactor to write a function
//UC4 Calculate wages for a month
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=20;
const NUM_OF_WORKING_DAYS=20;
function getWorkingHrs(empCheck){
switch(empCheck){
    case IS_PART_TIME:
        console.log("Employee is part time");
        return PART_TIME_HRS;
    case IS_FULL_TIME:
        console.log("Employee is full time");
        return FULL_TIME_HRS;
    default:
        console.log("employee is absent");
        return 0;
}
}
let totalEmpHrs=0;
for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
    let empCheck=Math.floor(Math.random()*10)%3;
    totalEmpHrs+=getWorkingHrs(empCheck)
}
let empWage=WAGE_PER_HR*totalEmpHrs;
console.log("Total emp hours = "+totalEmpHrs+" Total employee wage = "+empWage);