import { Product } from './Product';
export class Seller {
    private static sellers: Seller[] = [];
    private id: number;
    private name: string;
    private orders: string[];
    private products: Product[];  // Relationship

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.orders = [];
        this.products = [];
        Seller.sellers.push(this);
    }

    public addProduct(product: Product): void {
        if (!product) {
            throw new Error("Cannot add null or undefined product");
        }
        if (this.products.indexOf(product) === -1) {
            product.setSeller(this);
            this.products.push(product);
        }
    }

    public removeProduct(product: Product): void {
        if (!product) {
            throw new Error("Cannot remove null or undefined product");
        }
        const index = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
            product.setSeller(undefined);
        }
    }

    public getProducts(): Product[] {
        return [...this.products];
    }

    public createProduct(productId: number, name: string, price: number, stockQuantity: number, discount: number): Product {
        const product = new Product(productId, name, price, stockQuantity, discount);
        this.addProduct(product);
        return product;
    }

    public updateProduct(product: Product, name?: string, price?: number, stockQuantity?: number, discount?: number): void {
        if (this.products.indexOf(product) === -1) {
            throw new Error("Product not found in seller's inventory");
        }
        product.manageProduct(this, 'update', { name, price, stock: stockQuantity, discount });
    }

    public deleteProduct(product: Product): void {
        if (this.products.indexOf(product) === -1) {
            throw new Error("Product not found in seller's inventory");
        }
        product.manageProduct(this, 'delete');
        this.removeProduct(product);
    }

    public updateStock(product: Product, quantity: number): void {
        if (this.products.indexOf(product) !== -1) {
            product.manageProduct(this, 'adjustStock', { quantity });
        }
    }

    public viewProducts(): string {
        if (this.products.length === 0) {
            return "No products available";
        }
        return this.products
            .map((product, index) => 
                `Product #${index + 1}:\n${product.manageProduct(this, 'view')}`)
            .join('\n\n');
    }

    public viewOrder(): string {
        if (this.orders.length === 0) {
            return "No orders available";
        }
        return this.orders.map((order, index) => `Order #${index + 1}: ${order}`).join('\n');
    }

    public addOrder(order: string): void {
        this.orders.push(order);
    }

    public removeOrder(order: string): void {
        const index = this.orders.indexOf(order);
        if (index !== -1) {
            this.orders.splice(index, 1);
        }
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getOrders(): string[] {
        return [...this.orders];
    }

    // Add static method to view all products from all sellers
    public static viewAllProducts(): string {
        if (this.sellers.length === 0) {
            return "No sellers or products available";
        }

        return this.sellers
            .filter(seller => seller.products.length > 0)
            .map(seller => 
                `\n=== ${seller.getName()} (ID: ${seller.getId()}) ===\n${seller.viewProducts()}`
            )
            .join('\n');
    }
}
