import { Company } from './company';
export class Coupon {

    constructor(
        public id:number, // adding ? makes parameter optional instead of mandatory
        public company:Company,
        public category:string,
        public title:string,
        public description:string,
        public startDate:Date, // startDate
        public endDate:Date, // endDate
        public amount:number,
        public price:number,
        public image:string
        ){}
}
