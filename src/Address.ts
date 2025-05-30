// Address
class Address {
  constructor(
    public street: string,
    public sangkat: string,
    public village: string
  ) {}

  updateAddress(street: string, sangkat: string, village: string): void {
    this.street = street;
    this.sangkat = sangkat;
    this.village = village;
  }

  getFullAddress(): string {
    return `${this.street}, ${this.sangkat}, ${this.village}`;
  }
}
