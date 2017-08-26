import Service from './service';

export default class Presentages {
    subPath: string;
    constructor() {
        this.subPath = "percentages";
    }
    getPresentages(type : string, years : number, months : number, circular : string, salary : number) {
        return new Promise((resolve, reject) => {
            Service.get(this.subPath, { type: type, years: years , months: months, circular: circular, salary: salary * 12 })
                .then(result => resolve(result))
                .catch(err => console.log(err));
        });
        
    }
}