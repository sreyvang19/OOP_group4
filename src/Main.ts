import { User } from "./User";
import { Address } from "./Address";
import { Seller } from "./Seller";
import { Delivery } from "./Delivery";
import { DeliveryType } from "./DeliveryType";
import { Product } from "./Product";
import { OrderItem } from "./OrderItem";
import { Order } from "./Order";
import { Invoice } from "./Invoice";

// Show the tile of the system
console.log("====================================");
console.log("      E-Commerce Product System      ");
console.log("====================================");

let user1 = new User("John Doe", "john@example.com", "09032423", new Address("123 Main St", "Cityville", "12345"), "password123");
console.log(user1.register());
console.log(user1.getUserInfo());

















































































// Delivery
const address = new Address("123 Main St", "Central", "Village A");

const delivery = new Delivery(
  1,
  "TRACK123456",
  "In Transit",
  address,
  DeliveryType.EXPRESS
);
console.log(address.getFullAddress())
console.log(delivery.getDeliveryInfo());

// Create product and order item
const invoiceProduct = new Product("P100", "Monitor", 199.99, 30, 5);
const invoiceOrderItem = new OrderItem(invoiceProduct, 2);

// Create the order
const invoiceOrder = new Order(1001);
invoiceOrder.addOrderItem(invoiceOrderItem);

// Create the invoice with customer
const invoice = new Invoice(
  "INV-2025-001",
  new Date(),
  new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  30,
  invoiceOrder,
);


invoice.generateInvoice();
