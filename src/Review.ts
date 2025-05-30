import { User } from "./User";

export class Review {
    private id : number;
    private user : User;
    private rating : number;
    private comment : string;
    private date : Date;

    constructor(id: number, user : User, rating : number, comment : string, date : Date) {
        this.id = id;
        this.user = user;
        this.rating = rating;
        this.comment = comment;
        this.date = date;
    }
}