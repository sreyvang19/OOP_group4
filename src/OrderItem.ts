import { Product } from "./Product";

export class OrderItem {
    constructor(
        private product: Product,
        private quantity: number
    ) {
        if (quantity < 1) {
            throw new Error('Quantity must be at least 1');
        }
    }

    public getProductId(): string {
        return this.product.getId();
    }

    public getTotalPrice(): number {
        return this.product.getPrice() * this.quantity;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public getProduct(): Product {
        return this.product;
    }

    public setQuantity(quantity: number): void {
        if (quantity < 1) {
            throw new Error('Quantity must be at least 1');
        }
        this.quantity = quantity;
    }
}
