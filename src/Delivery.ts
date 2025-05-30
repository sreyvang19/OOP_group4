import { Address } from "./Address";

// Delivery
export class Delivery {
  constructor(
    private delivery_id: number,
    private trackingNumber: string,
    private status: string,
    private destination: Address
  ) {}

  public updateTrackingStatus(status: string): void {
    this.status = status;
  }
}