import { OrderItem } from "./OrderItem";
import { Payment } from './Payment';
import { Product } from "./Product";
import { Delivery } from "./Delivery";

export class Order {
    private static orders: Order[] = []; 

    constructor(
        private id: number,
        private orderItems: OrderItem[] = [],
        private discountApplied: number = 0, 
        private deliveryFee: number = 0,
        private status: string = 'PENDING',
        private payment?: Payment,
        private shipment: Delivery[] = []
    ) {
        Order.orders.push(this);
    }

    public addOrderItem(item: OrderItem): void {
        this.orderItems.push(item);
    }

    public removeOrderItem(productId: number): void {
        this.orderItems = this.orderItems.filter(item => {
            const product = item.getProduct();
            return product.getProductId() !== productId;  
        });
    }

    public calculateTotalPrice(): number {
        const subtotal = this.orderItems.reduce((sum, item) => {
            const product = item.getProduct();
            const quantity = item.getQuantity();
            return sum + (product.getPrice() * quantity);
        }, 0);
        const discount = subtotal * (this.discountApplied / 100);
        const total = subtotal - discount + this.deliveryFee;
        return parseFloat(total.toFixed(2));
    }

    public applyDiscount(discountPercentage: number): void {
        if (discountPercentage < 0 || discountPercentage > 100) {
            throw new Error('Discount percentage must be between 0 and 100');
        }
        this.discountApplied = discountPercentage;
    }

    public updateStatus(newStatus: string): void {
        const validStatuses = ['PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED'];
        const upperStatus = newStatus.toUpperCase();
        
        if (validStatuses.indexOf(upperStatus) === -1) {
            throw new Error(`Invalid status. Must be one of: ${validStatuses.join(', ')}`);
        }
        this.status = upperStatus;
    }

    public attachPayment(payment: Payment): void {
        this.payment = payment;
    }

    public addShipment(delivery: Delivery): void {
        this.shipment.push(delivery);
    }

    // Getters
    public getId(): number { return this.id; }
    public getOrderItems(): OrderItem[] { return [...this.orderItems]; }
    public getDiscountApplied(): number { return this.discountApplied; }
    public getDeliveryFee(): number { return this.deliveryFee; }
    public getStatus(): string { return this.status; }
    public getPayment(): Payment | undefined { return this.payment; }
    public getShipment(): Delivery[] { return [...this.shipment]; }

    // Static method to find order by ID
    public static findOrderById(id: number): Order | undefined {
        return Order.orders.find(order => order.getId() === id);
    }
}