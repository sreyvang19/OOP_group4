export class Address {
  constructor(
    private street: string,
    private sangkat: string,
    private village: string
  ) {}

  // method to update address
  updateAddress(street: string, sangkat: string, village: string): void {
    this.street = street;
    this.sangkat = sangkat;
    this.village = village;
  }

  // method to get address details
  public getFullAddress(): string {
    return `Location: ${this.street}, ${this.sangkat}, ${this.village}`;
  }
}
