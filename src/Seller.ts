export class Seller {
    private sellerId: string;
    private name: string;

    constructor(sellerId: string, name: string) {
        this.sellerId = sellerId;
        this.name = name;
    }

    public viewOrder() : void{

    }

    public updateStock() : void{}

    public removeStock() : void{}
}