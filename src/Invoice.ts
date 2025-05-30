// Invoice
class Invoice {
  constructor(
    public id: string,
    public issuedDate: Date,
    public dueDate: Date,
    public stockQuantity: number
  ) {}

  generateInvoice(): void {}
}