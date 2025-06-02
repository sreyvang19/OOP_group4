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

console.log("\n========== E-COMMERCE SYSTEM DEMO ==========");

// Test Seller 1
console.log("\n1. Creating First Seller");
const seller1 = new Seller(101, "Tech Store");
console.log(`Created: ${seller1.getName()} (ID: ${seller1.getId()})`);

// Test Product Management
console.log("\n2. Product Management - First Seller");
const laptop = seller1.createProduct(1, "Gaming Laptop", 1299.99, 10, 5);
const phone = seller1.createProduct(2, "Smartphone", 699.99, 20, 10);
console.log("\nInitial Products:");
console.log(seller1.viewProducts());

// Test Product Updates
console.log("\n3. Updating Products");
seller1.updateProduct(laptop, "Premium Gaming Laptop", 1499.99);
seller1.updateStock(phone, 5);
console.log("\nAfter Updates:");
console.log(seller1.viewProducts());

// Test Second Seller
console.log("\n4. Creating Second Seller");
const seller2 = new Seller(102, "Electronics Hub");
console.log(`Created: ${seller2.getName()} (ID: ${seller2.getId()})`);

// Add products to second seller
const tablet = seller2.createProduct(3, "Tablet Pro", 899.99, 15, 0);
const watch = seller2.createProduct(4, "Smart Watch", 299.99, 30, 15);

// View all products from all sellers
console.log("\n5. Viewing All Products in System");
console.log(Seller.viewAllProducts());

// Test Order Management
console.log("\n6. Order Management");
seller1.addOrder("Order #1: Gaming Laptop x2");
seller1.addOrder("Order #2: Smartphone x1");
console.log("\nOrders for", seller1.getName() + ":");
console.log(seller1.viewOrder());

// Test Product Deletion
console.log("\n7. Product Deletion");
console.log("Removing tablet from", seller2.getName());
seller2.deleteProduct(tablet);
console.log("\nFinal Product List for", seller2.getName() + ":");
console.log(seller2.viewProducts());

console.log("\n========== END OF DEMO ==========");

































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

























































