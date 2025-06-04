import { OrderItem } from "./OrderItem";
import { Payment } from "./Payment";
import { Delivery } from "./Delivery";
import { Invoice } from "./Invoice";

export class Order {
  private static orders: Order[] = [];

  private invoice?: Invoice;

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
      return item.getProduct().getProductId() !== productId;
    });
  }

  public calculateTotalPrice(): number {
    const subtotal = this.orderItems.reduce((sum, item) => {
      return sum + (item.getProduct().getPrice() * item.getQuantity());
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
    if (!validStatuses.includes(upperStatus)) {
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

  public setInvoice(invoice: Invoice): void {
    this.invoice = invoice;
  }

  public hasInvoice(): boolean {
    return !!this.invoice;
  }

  public getInvoice(): Invoice | undefined {
    return this.invoice;
  }

  public getId(): number { return this.id; }
  public getOrderItems(): OrderItem[] { return [...this.orderItems]; }
  public getDiscountApplied(): number { return this.discountApplied; }
  public getDeliveryFee(): number { return this.deliveryFee; }
  public getStatus(): string { return this.status; }
  public getPayment(): Payment | undefined { return this.payment; }
  public getShipment(): Delivery[] { return [...this.shipment]; }

  public static findOrderById(id: number): Order | undefined {
    return Order.orders.find(order => order.getId() === id);
  }
}
