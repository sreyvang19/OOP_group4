export class Payment {
    amount: number;
    method: PaymentType;
    status: PaymentStatus;
    transactionId: string;

    constructor(amount: number, method: PaymentType, transactionId: string) {
        if (amount <= 0) throw new Error('Amount must be greater than zero.');
        this.amount = amount;
        this.method = method;
        this.transactionId = transactionId;
        this.status = PaymentStatus.PENDING;
    }

    //method to process payment
    processPayment(): void {
        // Simulated logic
        if (this.method === PaymentType.CREDIT_CARD || this.method === PaymentType.DEBIT_CARD) {
            // Simulated external call to process payment
            this.status = PaymentStatus.COMPLETED;
        } else if (this.method === PaymentType.CASH) {
            this.status = PaymentStatus.COMPLETED;
        } else {
            this.status = PaymentStatus.FAILED;
        }
    }

    // Method to refund payment
    public refund(): void {
        if (this.status !== PaymentStatus.COMPLETED) {
            throw new Error('Cannot refund payment that is not completed.');
        }
        this.status = PaymentStatus.FAILED;
    }
}