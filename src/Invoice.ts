import { Order } from './Order';
import { User } from './User';
import { OrderItem } from './OrderItem';

export class Invoice {
  constructor(
    private id: string,
    private issuedDate: Date,
    private dueDate: Date,
    private stockQuantity: number,
    private order: Order,
  ) {}

  public generateInvoice(): void {
    const orderId = this.order.getId();
    const totalPrice = this.order.calculateTotalPrice();
    const issued = this.issuedDate.toLocaleDateString();
    const due = this.dueDate.toLocaleDateString();
    const items = this.order.getOrderItems();

    console.log('='.repeat(40));
    console.log(`🧾  INVOICE`);
    console.log('='.repeat(40));

    console.log(`Invoice ID   : ${this.id}`);
    console.log(`Order ID     : ${orderId}`);
    console.log(`Issued Date  : ${issued}`);
    console.log(`Due Date     : ${due}`);
    console.log('-'.repeat(40));

    console.log('Items:');
    items.forEach((item, index) => {
      const product = item.getProduct();
      const quantity = item.getQuantity();
      const itemTotal = product.getPrice() * quantity;
      console.log(
        `${index + 1}. ${product.getProductName()} x${quantity} = $${itemTotal.toFixed(2)}`
      );
    });

    console.log('-'.repeat(40));
    console.log(`Stock Qty    : ${this.stockQuantity}`);
    console.log(`TOTAL PRICE  : $${totalPrice.toFixed(2)}`);
    console.log('='.repeat(40));
  }
}
