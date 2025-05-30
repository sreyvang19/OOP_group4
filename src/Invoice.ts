// Invoice
class Invoice {
  constructor(
    private id: string,
    private issuedDate: Date,
    private dueDate: Date,
    private stockQuantity: number
  ) {}

  public generateInvoice(): void {}
}