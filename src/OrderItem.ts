export class OrderItem {
    constructor(
        private id: number,
        private productId: number,
        private quantity: number,
        private price: number
    ) {}

    public getId(): number { return this.id; }
    public getPrice(): number { return this.price * this.quantity; }
    public getQuantity(): number { return this.quantity; }
    public setQuantity(quantity: number): void { this.quantity = quantity; }
}
