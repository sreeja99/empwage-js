//UC6 Store daily wage in array
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function getWorkingHours(empCheck) {
    switch(empCheck){
        case IS_PART_TIME:
            console.log("Employee Present, is Part Time");
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            console.log("Employee Present, is Full Time");
            return FULL_TIME_HOURS;
        default:
            console.log("Employee is absent");
            return 0;
    }
}

function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let dailyWages = 0;
let empDailyWageArray = new Array();
while((totalEmpHrs<=MAX_HRS_IN_MONTH)&&(totalWorkingDays<NUM_OF_WORKING_DAYS)){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += getWorkingHours(empCheck);
    empDailyWageArray.push(calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("Daily Wage Array: "+empDailyWageArray);
console.log("UC6: Total working days: "+totalWorkingDays);
console.log("Total emp hours = "+totalEmpHrs+" Total employee wage = "+empWage);

//Array Helper Function
//UC 7A Calculate total wage using forEach or reduce method
let totalEmpWage = 0;
function sum(dailyWage){
    totalEmpWage += dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("UC7A - Total Days: "+totalWorkingDays+" Total hrs: "+totalEmpHrs+" Emp Wage:"+totalEmpWage);

function totalWages(totalWage,dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce: "+empDailyWageArray.reduce(totalWages,0));
//UC 7B - Show Day along with wage 
let dailyCounter =0;
function mapDayWithWage(dailyWage){
    dailyCounter++;
    return dailyCounter +" = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArray.map(mapDayWithWage);
console.log("UC 7B - Daily Wage Map:");
console.log(mapDayWithWageArr);
