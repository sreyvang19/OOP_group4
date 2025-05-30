// Delivery
class Delivery {
  constructor(
    public delivery_id: number,
    public trackingNumber: string,
    public status: string,
    public destination: Address
  ) {}

  updateTrackingStatus(status: string): void {
    this.status = status;
  }
}