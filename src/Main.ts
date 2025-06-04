import { User } from "./User";
import { Address } from "./Address";
import { Seller } from "./Seller";
import { Delivery } from "./Delivery";
import { DeliveryType } from "./DeliveryType";
import { Product } from "./Product";
import { OrderItem } from "./OrderItem";
import { Order } from "./Order";
import { Invoice } from "./Invoice";

// Show the title of the system
console.log("====================================");
console.log("      E-Commerce Product System      ");
console.log("====================================");

// 1. Create User
let user1 = new User(
  "John Doe",
  "john@example.com",
  "09032423",
  new Address("123 Main St", "Cityville", "12345"),
  "password123"
);

// 2. Create First Seller and Products
console.log("\n1. Creating First Seller");
const seller1 = new Seller(101, "Tech Store");
console.log(`Created: ${seller1.getName()} (ID: ${seller1.getId()})`);

console.log("\n2. Product Management - First Seller");
const laptop = seller1.createProduct("Gaming Laptop", 1299.99, 10, 5);
const phone = seller1.createProduct("Smartphone", 699.99, 20, 10);
console.log("\nInitial Products:");
console.log(seller1.viewProducts());

// 3. Update Product Info
console.log("\n3. Updating Products");
seller1.updateProduct(laptop, "Premium Gaming Laptop", 1499.99);
seller1.updateStock(phone, 5);
console.log("\nAfter Updates:");
console.log(seller1.viewProducts());

// 4. Create Second Seller
console.log("\n4. Creating Second Seller");
const seller2 = new Seller(102, "Electronics Hub");
console.log(`Created: ${seller2.getName()} (ID: ${seller2.getId()})`);

const tablet = seller2.createProduct("Tablet Pro", 899.99, 15, 0);
const watch = seller2.createProduct("Smart Watch", 299.99, 30, 15);

// 5. View All Products in System
console.log("\n5. Viewing All Products in System");
console.log(Seller.viewAllProducts());

// 6. Delete a Product
console.log("\n6. Product Deletion");
console.log("Removing tablet from", seller2.getName());
seller2.deleteProduct(tablet);
console.log("\nFinal Product List for", seller2.getName() + ":");
console.log(seller2.viewProducts());

// 7. Delivery Information
console.log("\n7. Delivery:");
const deliveryAddress = new Address("123 Main St", "Central", "Village A");
const delivery = new Delivery(1, "TRACK123456", "In Transit", deliveryAddress, DeliveryType.EXPRESS);
console.log(deliveryAddress.getFullAddress());
console.log(delivery.getDeliveryInfo());

// 8. Create Order
console.log("\n8. Creating Order");
const order1 = new Order(1001);
const orderItem1 = new OrderItem(laptop, 2);
order1.addOrderItem(orderItem1);
console.log("Order Created with Items:");
console.log(order1.getOrderItems().map(item => `${item.getProduct().getProductName()} x${item.getQuantity()}`));

// 9. Create and Generate Invoice (only if order has items)
console.log("\n9. Creating Invoice");
if (order1.getOrderItems().length > 0 && !order1.hasInvoice()) {
  const invoice = new Invoice(
    "INV-2025-001",
    new Date(),
    new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    5,
    order1
  );
  invoice.generateInvoice();
} else {
  console.log("❌ Cannot create invoice: Order is empty or already invoiced.");
}
