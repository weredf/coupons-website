export class Company {

    constructor(
        public id:number, // adding ? makes parameter optional instead of mandatory
        public name:string,
        public email:string,
        public password:string
        ){}
}
