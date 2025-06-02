import { User } from "./User";
import { Address } from "./Address";
import { Seller } from "./Seller";
import { Delivery } from "./Delivery";
import { DeliveryType } from "./DeliveryType";
import { Product } from "./Product";
import { OrderItem } from "./OrderItem";
import { Order } from "./Order";
import { Invoice } from "./Invoice";

let user1 = new User("John Doe", "john@example.com", "09032423", new Address("123 Main St", "Cityville", "12345"), "password123");

// First Seller
const seller1 = new Seller(101, "Alice's Shop");
// console.log("\n[Seller 1]");
// console.log("Name:", seller1.getName());

// Create and manage products
const laptop1 = seller1.createProduct(1, "Laptop", 999.99, 10, 5);
const phone1 = seller1.createProduct(2, "Smartphone", 499.99, 20, 10);

seller1.updateProduct(laptop1, "Gaming Laptop", 1299.99);
seller1.updateStock(phone1, 5);

// console.log("\n[Seller 1 - Products]");
// console.log(seller1.viewProducts());

// Add orders
seller1.addOrder("Order #ABC123: Laptop x1");
seller1.addOrder("Order #DEF456: Accessories x3");

// console.log("\n[Seller 1 - Orders]");
// console.log(seller1.viewOrder());

// Second Seller
const seller2 = new Seller(1001, "Tech Store");
// console.log("\n[Seller 2]");
// console.log("Name:", seller2.getName());

const laptop2 = seller2.createProduct(3, "Gaming Laptop", 1299.99, 10, 5);
const phone2 = seller2.createProduct(4, "Smartphone", 699.99, 20, 10);
const tablet2 = seller2.createProduct(5, "Tablet", 499.99, 15, 0);

// console.log("\n[Seller 2 - Products]");
// console.log(seller2.viewProducts());

seller2.updateProduct(laptop2, "Premium Gaming Laptop", 1499.99);
seller2.updateStock(phone2, 5);

// console.log("\n[Seller 2 - Updated Products]");
// console.log(seller2.viewProducts());

seller2.deleteProduct(tablet2);
// console.log("\n[Seller 2 - Final Products]");
// console.log(seller2.viewProducts());

// View all products from all sellers
console.log(Seller.viewAllProducts());
























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


// --- Invoice Test ---
const invoiceProduct = new Product("P100", "Monitor", 199.99, 30, 5);
const invoiceOrderItem = new OrderItem(invoiceProduct, 2);

const invoiceOrder = new Order(1001);
invoiceOrder.addOrderItem(invoiceOrderItem);

const invoice = new Invoice(
  "INV-2025-001",
  new Date(),
  new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  30,
  invoiceOrder
);

invoice.generateInvoice();























