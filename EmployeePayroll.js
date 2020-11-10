class EmployeePayrollData{
    //constructor
    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter
    get id(){
        return this._id;
    }
    set id(id){
        let idRegex = RegExp('^[1-9][0-9]{0,}$');
        if(idRegex.test(id))
            this._id = id;
        else throw 'Id is incorrect: '+id;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        let salaryRegex = RegExp("^[1-9][0-9]{0,}$");
        if(salaryRegex.test(salary))
            this._salary = salary;
        else throw 'Salary is incorrect: '+salary;
    }
    get gender(){
        return this._gender;
    }
    set gender(gender){
        let genderRegex = RegExp("^[MF]$");
        if(genderRegex.test(gender))
            this._gender = gender;
        else throw "Gender incorrect: "+gender+". Choose M or F";
    }
    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name)){
            this._name = name;
        }
        else throw 'Name is incorrect: '+name;
    }
    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        if(startDate.getMonth()<=(new Date()).getMonth()
           &&startDate.getDay()<=(new Date()).getDay()
           &&startDate.getFullYear()<=(new Date()).getFullYear())
            this._startDate = startDate;
        else throw "Date is incorrect: "+startDate.toLocaleDateString("en-IN");
    }

    //toString
    toString(){
        const options = {year: 'numeric', month: 'numeric', day:'numeric'};
        const empDate = this.startDate == undefined ? "undefined":
                        this.startDate.toLocaleDateString("en-IN",options);
        return "id = "+this.id+",name = "+this.name+",salary = "+this.salary +",gender = "+this.gender+",start date = "+empDate;
    }
}
let employeePayrollData = new EmployeePayrollData(1,"Mark",30000,"M",new Date());
console.log(employeePayrollData.toString());

//Fail case for name
try{
    employeePayrollData.name = "john";
    console.log(employeePayrollData.toString());
}
catch(e){
    console.error(e);
}

let newEmployeePayrollData = new EmployeePayrollData(1,"Terrisa",30000,"F",new Date());
console.log(newEmployeePayrollData.toString());

let newEmployeePayrollData2 = new EmployeePayrollData(1,"Terr",30000,"F",new Date());
console.log(newEmployeePayrollData2.toString());

//Fail case for id
try{
    let newEmployeePayrollData3 = new EmployeePayrollData(0,"Mark",2000,"F",new Date());
    console.log(newEmployeePayrollData3.toString());
} catch(e){
    console.error(e);
}
//Fail case for salary
try{
    let newEmployeePayrollData3 = new EmployeePayrollData(2,"Mark",-2000,"F",new Date());
    console.log(newEmployeePayrollData3.toString());
} catch(e){
    console.error(e);
}
//Fail case for gender
try{
    let newEmployeePayrollData3 = new EmployeePayrollData(2,"Mark",2000,"G",new Date());
    console.log(newEmployeePayrollData3.toString());
} catch(e){
    console.error(e);
}
//Fail Case for date
try{
    let newEmployeePayrollData3 = new EmployeePayrollData(2,"Mark",2000,"M",new Date('2021-04-11T10:20:30Z'));
    console.log(newEmployeePayrollData3.toString());
} catch(e){
    console.log(e);
}
