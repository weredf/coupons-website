export class Customer {

    constructor(
        public id?:number, // adding ? makes parameter optional instead of mandatory
        public firstName?:string,
        public lastName?:string,
        public email?:string,
        public password?:string
        ){}
}
