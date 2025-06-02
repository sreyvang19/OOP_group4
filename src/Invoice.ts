import { Order } from './Order';

export class Invoice {
  constructor(
    private id: string,
    private issuedDate: Date,
    private dueDate: Date,
    private stockQuantity: number,
    private order: Order
  ) {}

 public generateInvoice(): void {
  const orderId = this.order.getId();
  const totalPrice = this.order.calculateTotalPrice();
  const issued = this.issuedDate.toLocaleDateString();
  const due = this.dueDate.toLocaleDateString();

  console.log('='.repeat(40));
  console.log(`🧾  %cINVOICE`, 'font-weight: bold; font-size: 16px;');
  console.log('='.repeat(40));

  console.log(`Invoice ID   : ${this.id}`);
  console.log(`Order ID     : ${orderId}`);
  console.log(`Issued Date  : ${issued}`);
  console.log(`Due Date     : ${due}`);
  console.log(`Stock Qty    : ${this.stockQuantity}`);
  console.log('-'.repeat(40));
  console.log(`%cTOTAL PRICE  : $${totalPrice.toFixed(2)}`, 'color: green; font-weight: bold;');
  console.log('='.repeat(40));
}

}
