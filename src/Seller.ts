export class Seller {
    private sellerId: string;
    private name: string;
    private orders: Array<{ orderId: string, productId: string, quantity: number }> = [];

    constructor(sellerId: string, name: string) {
        this.sellerId = sellerId;
        this.name = name;
    }

    public getSellerId(): string {
        return this.sellerId;
    }

    public getName(): string {
        return this.name;
    }

    // View all orders for this seller
    public viewOrder(): void {
        if (this.orders.length === 0) {
            console.log("No orders found.");
            return;
        }

        console.log(`Orders for ${this.name} (Seller ID: ${this.sellerId}):`);
        this.orders.forEach(order => {
            console.log(`Order ID: ${order.orderId}, Product ID: ${order.productId}, Quantity: ${order.quantity}`);
        });
    }

    // Update stock (placeholder for external system or logging)
    public updateStock(productId: string, quantity: number): void {
        if (quantity < 0) {
            console.log("Quantity cannot be negative.");
            return;
        }
        console.log(`Stock update requested for Product ID ${productId}: ${quantity} units`);
        // Could integrate with an external system here
    }

    // Remove stock (placeholder for external system or logging)
    public removeStock(productId: string, quantity: number): void {
        if (quantity < 0) {
            console.log("Quantity cannot be negative.");
            return;
        }
        console.log(`Stock removal requested for Product ID ${productId}: ${quantity} units`);
        // Could integrate with an external system here
    }

    // Helper method to add an order
    public addOrder(orderId: string, productId: string, quantity: number): void {
        if (quantity <= 0) {
            console.log("Order quantity must be positive.");
            return;
        }
        this.orders.push({ orderId, productId, quantity });
        console.log(`Order ${orderId} added for Product ID ${productId}, Quantity: ${quantity}`);
    }
}