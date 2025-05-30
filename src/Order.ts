import { OrderItem } from "./OrderItem";
import { Payment } from './Payment';

class Order {
    id: number;
    orderItems: OrderItem[];
    discountApplied: number; // as a percentage (0-100)
    deliveryFee: number;
    status: string;
    payment: Payment;

    constructor(id: number, deliveryFee: number = 0, discountApplied: number = 0) {
        this.id = id;
        this.deliveryFee = deliveryFee;
        this.discountApplied = discountApplied;
        this.orderItems = [];
        this.status = 'PENDING';
    }

    addOrderItem(item: OrderItem): void {
        this.orderItems.push(item);
    }

    removeOrderItem(productId: string): void {
        this.orderItems = this.orderItems.filter(item => item.productId !== productId);
    }

    calculateTotalPrice(): number {
        let subtotal = this.orderItems.reduce((sum, item) => sum + item.getTotalPrice(), 0);
        let discount = subtotal * (this.discountApplied / 100);
        let total = subtotal - discount + this.deliveryFee;
        return parseFloat(total.toFixed(2));
    }

    applyDiscount(discountPercentage: number): void {
        if (discountPercentage < 0 || discountPercentage > 100) {
            throw new Error('Discount must be between 0 and 100.');
        }
        this.discountApplied = discountPercentage;
    }

    updateStatus(newStatus: string): void {
        const validStatuses = ['PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED'];
        if (!validStatuses.includes(newStatus.toUpperCase())) {
            throw new Error('Invalid order status.');
        }
        this.status = newStatus.toUpperCase();
    }

    attachPayment(payment: Payment): void {
        this.payment = payment;
    }
}