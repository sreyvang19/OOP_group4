import { Seller } from './Seller';
export class Product {

    private productId: number;
    private name: string;
    private price: number;
    private stockQuantity: number;
    private discount: number;
    private seller?: Seller;  // Make seller optional

    constructor(productId: number, name: string, price: number, stockQuantity: number, discount: number) {
        this.productId = productId;
        this.name = name;
        this.price = price >= 0 ? price : 0;
        this.stockQuantity = stockQuantity >= 0 ? stockQuantity : 0;
        this.discount = discount >= 0 && discount <= 100 ? discount : 0;
    }

    public viewProduct(): string {
        return `Product ID: ${this.productId}, Name: ${this.name}, Price: $${this.price.toFixed(2)}, Stock: ${this.stockQuantity}, Discount: ${this.discount}%`;
    }

    public setSeller(seller?: Seller): void {
        this.seller = seller;
    }

    public getSeller(): Seller | undefined {
        return this.seller;
    }

    // Other methods remain unchanged...
    public createProduct(name: string, price: number, stockQuantity: number, discount: number): void {
        this.name = name;
        this.price = price >= 0 ? price : 0;
        this.stockQuantity = stockQuantity >= 0 ? stockQuantity : 0;
        this.discount = discount >= 0 && discount <= 100 ? discount : 0;
    }

    public deleteProduct(): void {
        this.name = '';
        this.price = 0;
        this.stockQuantity = 0;
        this.discount = 0;
    }

    public adjustStock(quantity: number): void {
        if (quantity < 0 && Math.abs(quantity) > this.stockQuantity) {
            throw new Error(`Cannot reduce stock by ${Math.abs(quantity)}. Only ${this.stockQuantity} available.`);
        }
        this.stockQuantity += quantity;
    }


    public updateProduct(name?: string, price?: number, stockQuantity?: number, discount?: number): void {
        if (name) {
            this.name = name;
        }
        if (price !== undefined && price >= 0) {
            this.price = price;
        }
        if (stockQuantity !== undefined && stockQuantity >= 0) {
            this.stockQuantity = stockQuantity;
        }
        if (discount !== undefined && discount >= 0 && discount <= 100) {
            this.discount = discount;
        }
    }

    // Change from public to protected
    public displayProductInfo(): string {
        return `
            Product ID: ${this.productId}
            Name: ${this.name}
            Price: $${this.price.toFixed(2)}
            Stock: ${this.stockQuantity}
            Discount: ${this.discount}%
            Seller: ${this.seller ? this.seller.getName() : 'No seller assigned'}
        `;
    }

    // Add this method for basic public view
    public getBasicInfo(): string {
        return `Product ID: ${this.productId}, Name: ${this.name}`;
    }

    public getFormattedPrice(): string {
        const discountedPrice = this.price * (1 - this.discount / 100);
        return `$${discountedPrice.toFixed(2)}`;
    }
}