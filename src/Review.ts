import { User } from "./User";

export class Review {
    constructor(
        private id: number,
        private user: User,
        private rating: number,
        private comment: string,
        private date: Date
    ) {
        if (rating < 1 || rating > 5) {
            throw new Error("Rating must be between 1 and 5");
        }
    }

    public getId(): number {
        return this.id;
    }

    public getUser(): User {
        return this.user;
    }

    public getRating(): number {
        return this.rating;
    }

    public getComment(): string {
        return this.comment;
    }

    public getDate(): Date {
        return this.date;
    }
}