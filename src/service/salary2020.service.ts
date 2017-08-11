import Service from './service';

export default class Presentages {
    subPath: string;
    constructor() {
        this.subPath = "salary";
    }
    get2020Salary(scale : string, grade : string, circular : string, salary : number, retired_date : string, increment_date : string) {
        return new Promise((resolve, reject) => {
            Service.get(this.subPath, { scale: scale, grade: grade ,  circular: circular, salary: salary, retired_date : retired_date, increment_date : increment_date , target : "2020" })
                .then(result => resolve(result))
                .catch(err => console.log(err));
        });
    }
}
