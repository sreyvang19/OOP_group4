import { Product } from "./Product";

export class OrderItem {
    private pricePurchase: number;
    private discountPurchase: number;
    private status: string;

    constructor(
        private product: Product,
        private quantity: number
    ) {
        if (!product) {
            throw new Error('Product cannot be null or undefined');
        }
        if (quantity < 1) {
            throw new Error('Quantity must be at least 1');
        }
        // Store the price and discount at time of purchase
        this.pricePurchase = this.product.getPrice();
        this.discountPurchase = this.product.getDiscount();
        this.status = 'Pending';
    }

    // Method to cancel the order item
    public cancel(): void {
        this.status = 'Cancelled';
    }

    // Method to return the item
    public returnItem(): void {
        this.status = 'Returned';
    }


    // Method to calculate the total price of the order item
    public calculateTotal(): number {
        const basePrice = this.pricePurchase * this.quantity;
        return basePrice * (1 - this.discountPurchase / 100);
    }

    // Method to update the quantity of the order item
    public updateQuantity(newQuantity: number): number {
        if (newQuantity < 1) {
            throw new Error('Quantity must be at least 1');
        }
        this.quantity = newQuantity;
        return this.calculateTotal();
    }

    public getStatus(): string {
        return this.status;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public getProduct(): Product {
        return this.product;
    }

    public getPricePurchase(): number {
        return this.pricePurchase;
    }

    public getDiscountPurchase(): number {
        return this.discountPurchase;
    }
}
