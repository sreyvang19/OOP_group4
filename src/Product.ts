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

    protected displayProductInfo(): string {
        return `
            Product ID: ${this.productId}
            Name: ${this.name}
            Price: $${this.price.toFixed(2)}
            Stock: ${this.stockQuantity}
            Discount: ${this.discount}%
            Seller: ${this.seller ? this.seller.getName() : 'No seller assigned'}
        `;
    }

    // This is the only public method for viewing basic product info
    public getBasicInfo(): string {
        return `Product ID: ${this.productId}, Name: ${this.name}`;
    }

    // Make price formatting protected
    protected getFormattedPrice(): string {
        const discountedPrice = this.price * (1 - this.discount / 100);
        return `$${discountedPrice.toFixed(2)}`;
    }

    public getPrice(): number {
        return this.price;
    }

    public getDiscount(): number {
        return this.discount;
    }

    public setSeller(seller?: Seller): void {
        this.seller = seller;
    }

    public getSeller(): Seller | undefined {
        return this.seller;
    }

    // Methods that Seller can use to manage products
    public manageProduct(seller: Seller, action: 'create' | 'update' | 'delete' | 'view' | 'adjustStock', params?: any): any {
        if (this.seller !== seller) {
            throw new Error("Only the assigned seller can manage this product");
        }

        switch (action) {
            case 'create':
                return this.createProduct(params.name, params.price, params.stock, params.discount);
            case 'update':
                return this.updateProduct(params.name, params.price, params.stock, params.discount);
            case 'delete':
                return this.deleteProduct();
            case 'view':
                return this.viewProduct();
            case 'adjustStock':
                return this.adjustStock(params.quantity);
            default:
                throw new Error("Invalid action");
        }
    }

    protected viewProduct(): string {
        if (!this.seller) {
            return "Product not assigned to any seller";
        }
        return `
            Product ID: ${this.productId}
            Name: ${this.name}
            Price: $${this.price.toFixed(2)}
            Stock: ${this.stockQuantity}
            Discount: ${this.discount}%
            Seller: ${this.seller.getName()}
        `;
    }

    // Make these methods private since they're only called through manageProduct
    private createProduct(name: string, price: number, stockQuantity: number, discount: number): void {
        this.name = name;
        this.price = price >= 0 ? price : 0;
        this.stockQuantity = stockQuantity >= 0 ? stockQuantity : 0;
        this.discount = discount >= 0 && discount <= 100 ? discount : 0;
    }

    private updateProduct(name?: string, price?: number, stockQuantity?: number, discount?: number): void {
        if (name) this.name = name;
        if (price !== undefined && price >= 0) this.price = price;
        if (stockQuantity !== undefined && stockQuantity >= 0) this.stockQuantity = stockQuantity;
        if (discount !== undefined && discount >= 0 && discount <= 100) this.discount = discount;
    }

    private deleteProduct(): void {
        if (!this.seller) return;
        this.name = '';
        this.price = 0;
        this.stockQuantity = 0;
        this.discount = 0;
        this.seller = undefined;
    }

    private adjustStock(quantity: number): void {
        if (quantity < 0 && Math.abs(quantity) > this.stockQuantity) {
            throw new Error(`Cannot reduce stock by ${Math.abs(quantity)}. Only ${this.stockQuantity} available.`);
        }
        this.stockQuantity += quantity;
    }

    // Added for Seller class to access protected methods
    protected getId(): number {
        return this.productId;
    }
}