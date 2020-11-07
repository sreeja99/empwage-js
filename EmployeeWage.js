const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=20;
let empHrs = 0;
let empCheck = Math.floor(Math.random()*10)%2 +1;
console.log(empCheck);
switch(empCheck){
    case IS_PART_TIME:
        empHrs=PART_TIME_HRS;
        break;
    case IS_FULL_TIME:
        empHrs=FULL_TIME_HRS;
        break;
}
let empWage=WAGE_PER_HR*empHrs;
console.log("Total Employee Wage:"+empWage);