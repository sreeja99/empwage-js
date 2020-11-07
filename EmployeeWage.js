const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=20;
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
let empCheck = Math.floor(Math.random()*10)%3;
let empHrs=getWorkingHrs(empCheck)
let empWage=WAGE_PER_HR*empHrs;
console.log("Total Employee Wage:"+empWage);