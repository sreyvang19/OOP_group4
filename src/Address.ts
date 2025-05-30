// Address
export class Address {
  constructor(
    private street: string,
    private sangkat: string,
    private village: string
  ) {}

  updateAddress(street: string, sangkat: string, village: string): void {
    this.street = street;
    this.sangkat = sangkat;
    this.village = village;
  }

  public getFullAddress(): string {
    return `${this.street}, ${this.sangkat}, ${this.village}`;
  }
}
