import service from './src/service/service';


/*
* get reduced unredeced precentages
* @param type, years, months,circular, salary
*/
export function getPrecentage(type: string, years: number, months: number, circular: string, salary: number) {
	if(circular == "2015-1"){
		circular = "2015";
	}
    var presentageObject = service.presentages.getPresentages(type, years, months, circular, salary);
    return presentageObject;
}

/*
* get reduced unredeced precentages for military
* @param type, years, months,circular, salary
*/
export function getPrecentageforMilitary(type: string, years: number, months: number, circular: string, salary: number, offeredto:string) {
    var presentageObject = service.presentages.getPresentagesForMilitary(type, years, months, circular, salary, offeredto);
    return presentageObject;
}
/*
* get 2020 salary and increment values
* @parms scale, grade, circular, salary, retired_date, increment_date
*/
export function get2020Salary(scale: string, grade: string, circular: string, salary: number, retired_date: string, increment_date: string) {
	if(circular == "2015-1"){
		circular = "2015";
	}
    var salaryObject = service.salary2020.get2020Salary(scale, grade, circular, salary, retired_date, increment_date)
    return salaryObject;
}
/*
* calculate annual consolidate salary and annual consolidate salary in 2020
* @param basicSalary  
*/
export function annualSalaryCalculation(basicSalary: number) {
    let annualSalary = basicSalary * 12;
    return annualSalary;
}

/*
* calculate gross salary both current and 2020
* @param basicSalary, increment, allowance
*/
export function grossSalaryCalculation(basicSalary: number, increment: number, allowance: number) {
    let grossSalary = (basicSalary * 12) + +increment + +allowance;
    return grossSalary;
}

/*
* calculate reduced and unreduced pension both current and 2020
* @params grossSalary, precentage
*/
export function reducedUnreducedCalculation(grossSalary: number, precentage: number) {
    let reducedUnreduced = ((grossSalary * precentage) / 100) / 12;
    return reducedUnreduced;
}

/*
* calculate gross gratuity
* @param grossSalary, unreducedPrecentage
*/
export function grossGratuityCalculation(grossSalary: number, unreducedPrecentage: number) {
    let grossGratuity = ((grossSalary * unreducedPrecentage) / 100) * 2;
    return grossGratuity;
}

/*
* calculate net gratuity
* @param grossGratuity, govDeduction
*/
export function netGratuityCalculation(grossGratuity: number, govDeduction: number) {
    let netGratuity = grossGratuity - govDeduction;
    return netGratuity;
}

/*
* calculate revised net gratuity
* @param oldGrossGratuity, newGrossGratuity, govDeduction
*/
export function revisedNetGratuityCalculation(oldGrossGratuity: number, newGrossGratuity: number, govDeduction: number) {
    let netGratuity = newGrossGratuity - (oldGrossGratuity + +govDeduction);
    return netGratuity;
}

/*
* calculate total service period
* @param trainedPeriod, wnodDeductionPeriod, pensionablePeriod
*/
export function netServicePeriodCalculation(trainedPeriod: Duration, wnodDeductionPeriod: Duration, pensionablePeriod: Duration) {
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
export function netNoPayLeaveCalculation(noPayLeave: Duration, noPaySetOff: Duration) {
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

/*
* calculate total nopay set off
* @param governmentSetOff, foreignSetOff, governmentSetOffMore
*/
export function netNoPaySetOffCalculation(governmentSetOff: Duration, foreignSetOff: Duration, governmentSetOffMore: Duration) {
    var governmentSetOffYY = governmentSetOff.years;
    var governmentSetOffMM = governmentSetOff.months;
    var governmentSetOffDD = governmentSetOff.days;

    var foreignSetOffYY = foreignSetOff.years;
    var foreignSetOffMM = foreignSetOff.months;
    var foreignSetOffDD = foreignSetOff.days;

    var governmentSetOffMoreYY = governmentSetOffMore.years;
    var governmentSetOffMoreMM = governmentSetOffMore.months;
    var governmentSetOffMoreDD = governmentSetOffMore.days;

    var governmentSetOffDays = (governmentSetOffYY * 12 * 30) + +(governmentSetOffMM * 30) + +governmentSetOffDD;
    var foreignSetOffDays = (foreignSetOffYY * 12 * 30) + +(foreignSetOffMM * 30) + +foreignSetOffDD;
    var governmentSetOffMoreDays = (governmentSetOffMoreYY * 12 * 30) + +(governmentSetOffMoreMM * 30) + +governmentSetOffMoreDD;

    var netNoPaySetoff = governmentSetOffDays + +foreignSetOffDays + +governmentSetOffMoreDays;
    var setOffPeriod = new Duration();

    setOffPeriod.years = Math.floor(netNoPaySetoff / 360);
    setOffPeriod.months = Math.floor((netNoPaySetoff % 360) / 30);
    setOffPeriod.days = Math.floor((netNoPaySetoff % 360) % 30);

    return setOffPeriod;
}

/*
* calculate reduce no pay amount
* @param servicePeriod
*/
export function reduceNoPayCalculation(servicePeriod: Duration) {
    var reduceNoPay = new Duration();

    if (servicePeriod.years >= 30) {
        var serviceYY = servicePeriod.years;
        var serviceMM = servicePeriod.months;
        var serviceDD = servicePeriod.days;

        var serviceDays = (serviceYY * 12 * 30) + +(serviceMM * 30) + +serviceDD;
        //30 years = 10800 days
        var constantDays = 10800;

        var reduceDays = serviceDays - constantDays;

        reduceNoPay.years = Math.floor(reduceDays / 360);
        reduceNoPay.months = Math.floor((reduceDays % 360) / 30);
        reduceNoPay.days = Math.floor((reduceDays % 360) % 30);

        return reduceNoPay;
    }
    else {
        return reduceNoPay;
    }
}

/*
* calculate deductable percentage 1% for every 6 months
* @param serviceYears, serviceMonths
*/
export function deductablePercentageCalculation(serviceYears: number, serviceMonths: number) {
    let deductablePercentage = 0;

    if (serviceYears < 25) {

        if (serviceMonths < 6) {
            deductablePercentage = (25 - serviceYears) * 2;
        }
        else {
            deductablePercentage = (25 - (serviceYears + +0.5)) * 2;
        }
        return deductablePercentage;
    }
    else {
        return deductablePercentage;
    }
}

/*
* calculate deductable percentage of no pay
* @param netNoPay
*/
export function noPayDeductablePercentageCalculation(netNoPay : Duration){
    let noPayPercentage = ((netNoPay.years * 12) + +netNoPay.months) * 0.2;
    return noPayPercentage;
}

/*
* calculate net percentage after deduct
* @param percentage, deductablePercentage, noPayPercentage
*/
export function netPercentageCalculation(percentage: number, deductablePercentage: number, noPayPercentage: number) {
    let netPercentage = percentage - (deductablePercentage + +noPayPercentage);
    return netPercentage;

}

/*
* calculate revision arrears
* @ param newBasic, oldBasic,effectDate,processDate
*/
export function revisionArrears (newBasic:number, oldBasic: number , effectDate: Date , toDate:Date ){
 
   // var newBasic = 25549.84;
   // var oldBasic = 24979.83;
   
   // var effectDate      = new Date("2011-01-01");
   // var toDate		    = new Date("2017-07-31");
    
    //calculate months for pay arrears
    var yearsDifference =toDate.getFullYear()-effectDate.getFullYear();
    var monthsDifference=toDate.getMonth()-effectDate.getMonth();    
   	var arrearsMonths   = (monthsDifference-1)+(yearsDifference*12);
    

     //calculate dates for pay arrears
    var totalDatesOfEffMonth    =new Date(effectDate.getFullYear(), effectDate.getMonth()+1, 0).getDate();
    var arrearsDatesOfEffectdate=totalDatesOfEffMonth-effectDate.getDate()+1;
    var totalDatesOfToMonth     =new Date(toDate.getFullYear(), toDate.getMonth()+1, 0).getDate();
    var arrearsDatesOfToDate    =toDate.getDate();

    //calculate total arrears (total arrears for full months + arrears for remain dates in effective months + arrears for remain dates in process months )
    var totalArrears= ((newBasic-oldBasic)*arrearsMonths)+((newBasic-oldBasic)*(arrearsDatesOfEffectdate/totalDatesOfEffMonth))+((newBasic-oldBasic)*(arrearsDatesOfToDate/totalDatesOfToMonth));
    return totalArrears;
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
