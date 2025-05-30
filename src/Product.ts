export class Product {
    private privateId : string;
    private name : string;
    private price : number;
    private stockQuantity : number;
    private discount : number;

    constructor(privateId: string, name: string, price: number, stockQuantity: number, discount: number) {
        this.privateId = privateId;
        this.name = name;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.discount = discount;
    }

    public viewProduct(): string {
        return `Product ID: ${this.privateId}, Name: ${this.name}, Price: $${this.price.toFixed(2)}, Stock: ${this.stockQuantity}, Discount: ${this.discount}%`;
    }

    public createProduct(): void {
        // Logic to create a product in the system
        
        console.log(`Product ${this.name} created with ID ${this.privateId}.`);
    }

    public updateProduct(): void {
        // Logic to update product details
        console.log(`Product ${this.name} with ID ${this.privateId} updated.`);
    }
}