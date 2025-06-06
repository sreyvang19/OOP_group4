import { Address } from "./Address";
import { DeliveryType } from "./DeliveryType";

export class Delivery {
  constructor(
    private delivery_id: number,
    private trackingNumber: string,
    private status: string,
    private destination: Address,
    private deliveryType: DeliveryType
  ) {}

  public updateTrackingStatus(status: string): void {
    this.status = status;
  }

  public getDeliveryInfo(): string {
    return `Tracking #${this.trackingNumber}, Status: ${this.status}, Type: ${this.deliveryType}`;
  }

  public getTrackingNumber(): string {
    return this.trackingNumber;
  }

  public getDeliveryType(): DeliveryType {
    return this.deliveryType;
  }

  public getAddress(): Address {
    return this.destination;
  }

  public getStatus(): string {
    return this.status;
  }
}
