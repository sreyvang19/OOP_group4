export class Product {
    private privateId: string;
    private name: string;
    private price: number;
    private stockQuantity: number;
    private discount: number;

    constructor(privateId: string, name: string, price: number, stockQuantity: number, discount: number) {
        this.privateId = privateId;
        this.name = name;
        this.price = price >= 0 ? price : 0; // Ensure non-negative price
        this.stockQuantity = stockQuantity >= 0 ? stockQuantity : 0; // Ensure non-negative stock
        this.discount = discount >= 0 && discount <= 100 ? discount : 0; // Ensure discount is 0-100%
    }

    public getId(): string {
        return this.privateId;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public viewProduct(): string {
        return `Product ID: ${this.privateId}, Name: ${this.name}, Price: $${this.price.toFixed(2)}, Stock: ${this.stockQuantity}, Discount: ${this.discount}%`;
    }

    public createProduct(): void {
        // Simulate creating a product in the system (e.g., saving to a database)
        if (!this.privateId || !this.name) {
            console.log("Error: Product ID and name are required to create a product.");
            return;
        }
        console.log(`Product ${this.name} created with ID ${this.privateId}. Price: $${this.price.toFixed(2)}, Stock: ${this.stockQuantity}, Discount: ${this.discount}%`);
    }

    public updateProduct(name?: string, price?: number, stockQuantity?: number, discount?: number): void {
        // Update provided fields, keep existing values if not provided
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
        console.log(`Product ${this.name} with ID ${this.privateId} updated. New details: Price: $${this.price.toFixed(2)}, Stock: ${this.stockQuantity}, Discount: ${this.discount}%`);
    }

    // Helper method to adjust stock (e.g., for orders or restocking)
    public adjustStock(quantity: number): void {
        if (quantity < 0 && Math.abs(quantity) > this.stockQuantity) {
            console.log(`Error: Cannot reduce stock by ${Math.abs(quantity)}. Only ${this.stockQuantity} available.`);
            return;
        }
        this.stockQuantity += quantity;
        if (quantity > 0) {
            console.log(`Added ${quantity} units to ${this.name}. New stock: ${this.stockQuantity}`);
        } else if (quantity < 0) {
            console.log(`Removed ${Math.abs(quantity)} units from ${this.name}. New stock: ${this.stockQuantity}`);
        }
    }
}