import service from './src/service/service';


/*
* get reduced unredeced precentages
* @param type, years, months,circular, salary
*/
export function getPrecentage(type : string, years : number, months : number, circular : string, salary : number){
  var presentageObject = service.presentages.getPresentages(type, years, months, circular, salary);
  return presentageObject;
}

/*
* get 2020 salary and increment values
* @parms scale, grade, circular, salary, retired_date, increment_date
*/
export function get2020Salary(scale : string, grade : string, circular : string, salary : number, retired_date : string, increment_date : string){
    var salaryObject = service.salary2020.get2020Salary(scale, grade, circular, salary, retired_date, increment_date)
    return salaryObject;
}
/*
* calculate annual consolidate salary and annual consolidate salary in 2020
* @param basicSalary  
*/
export function annualSalaryCalculation(basicSalary : number) {
    let annualSalary =  basicSalary * 12;
    return annualSalary;
}

/*
* calculate gross salary both current and 2020
* @param basicSalary, increment, allowance
*/
export function grossSalaryCalculation(basicSalary : number, increment : number, allowance : number) {
    let grossSalary = (basicSalary * 12) + +increment + +allowance;
    return grossSalary;
}

/*
* calculate reduced and unreduced pension both current and 2020
* @params grossSalary, precentage
*/
export function reducedUnreducedCalculation(grossSalary : number, precentage : number) { 
    let reducedUnreduced = ( (grossSalary * precentage) / 100 ) / 12;
    return reducedUnreduced;
}

/*
* calculate gross gratuity
* @param grossSalary, unreducedPrecentage
*/
export function grossGratuityCalculation(grossSalary : number, unreducedPrecentage : number) {
    let grossGratuity =  ( (grossSalary * unreducedPrecentage) / 100 ) * 2;
    return grossGratuity;
}

/*
* calculate net gratuity
* @param grossGratuity, govDeduction
*/
export function netGratuityCalculation(grossGratuity : number, govDeduction : number) {
    let netGratuity = grossGratuity - govDeduction;
    return netGratuity;
}

/*
* calculate total service period
* @param trainedPeriod, wnodDeductionPeriod, pensionablePeriod
*/
export function netServicePeriodCalculation(trainedPeriod : Duration, wnodDeductionPeriod : Duration, pensionablePeriod : Duration){
    var trainedYY = trainedPeriod.years;
    var trainedMM = trainedPeriod.months;
    var trainedDD = trainedPeriod.days;

    var wnopYY = wnodDeductionPeriod.years;
    var wnopMM = wnodDeductionPeriod.months;
    var wnopDD = wnodDeductionPeriod.days;

    var pensionableYY = pensionablePeriod.years;
    var pensionableMM = pensionablePeriod.months;
    var pensionableDD = pensionablePeriod.days;

    var trainedDays = (trainedYY * 12 * 30) + +(trainedMM * 30) + +trainedDD;
    var wnopDays = (wnopYY * 12 * 30) + +(wnopMM * 30) + +wnopDD;
    var pensionabeDays = (pensionableYY * 12 * 30) + +(pensionableMM * 30) + +pensionableDD;

    var serviceDays = trainedDays + +wnopDays + +pensionabeDays;
    var servicePeriod = new Duration();

    servicePeriod.years = Math.floor(serviceDays / 360);
    servicePeriod.months = Math.floor((serviceDays % 360) / 30);
    servicePeriod.days = Math.floor((serviceDays % 360) % 30);

    return servicePeriod;
}

/*
* calculate net no pay leaves
* @ param noPayLeaves, noPaySetoff
*/
export function netNoPayLeaveCalculation (noPayLeave : Duration, noPaySetOff : Duration){
    var noPayYY = noPayLeave.years;
    var noPayMM = noPayLeave.months;
    var noPayDD = noPayLeave.days;

    var setOffYY = noPaySetOff.years;
    var setOffMM = noPaySetOff.months;
    var setOffDD = noPaySetOff.days;

    var noPayDays = (noPayYY * 12 * 30) + +(noPayMM * 30) + +noPayDD;
    var setOffDays = (setOffYY * 12 * 30) + +(setOffMM * 30) + +setOffMM;

    var netNoPayDays = noPayDays - setOffDays;
    var netNoPay = new Duration();

    netNoPay.years = Math.floor(netNoPayDays / 360);
    netNoPay.months = Math.floor((netNoPayDays % 360) / 30);
    netNoPay.days = Math.floor((netNoPayDays % 360) % 30);

    return netNoPay;
}

class Duration {
     years;
     months;
     days;

    constructor() {
        this.years = 0;
        this.months = 0;
        this.days = 0;
    }
}
