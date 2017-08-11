## Install

```
$ npm install --save pensions

```

## Functions

function getPrecentage()

    Description:- Get reduced and unreduced precentages 
    Parameters:-  
                type: string 
                years: number
                months: number
                circular: string
                salary: number (monthly salary)
    
    Return values:- Promise object
                {
                    circular:
                    reduced:
                    unreduced:
                }


function get2020Salary()

    Description:- Get 2020 salary and current and 2020 increment values 
    Parameters:-  
                scale: string 
                grade: string
                circular: string
                salary: number (monthly salary)
                retired_date: string
                increment_date: string
    
    Return values:- Promise object
                {
                    basicSalary:
                    firstAllowance:
                    secondAllowance:
                    step:
                }


function annualSalaryCalculation()

    Description:- Calculate annual consolidate salary and annual consolidate salary in 2020
    Parameters:- basicSalary : number
    Return value:- consolidateSalary : number


function grossSalaryCalculation()

    Description:- Calculate gross salary both current and 2020
    Parameters:- 
                basicSalary : number
                increment : number
                allowance : number
    Return value:- grossSalary: number


function reducedUnreducedCalculation()

    Description:- Calculate reduced and unreduced pension both current and 2020
    Parameters:-
                grossSalary : number
                precentage : number
    Return value:- reduced/unreduced: number


function grossGratuityCalculation()

    Description:- Calculate gross gratuity
    Parameters:- 
                grossSalary : number
                unreducedPrecentage : number
    Return value:- grossGratuity : number


function netGratuityCalculation()

    Description:- Calculate net gratuity
    Parameters:- 
                grossGratuity : number
                govDeduction : number
    Return value:- netGratuity : number