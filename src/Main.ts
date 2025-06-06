import { User } from "./User";
import { Address } from "./Address";
import { Seller } from "./Seller";
import { Delivery } from "./Delivery";
import { DeliveryType } from "./DeliveryType";
import { Product } from "./Product";
import { OrderItem } from "./OrderItem";
import { Order } from "./Order";
import { Invoice } from "./Invoice";
import { Review } from "./Review";

// System Header
console.log("\n🛍️  E-COMMERCE SYSTEM");
console.log("=".repeat(50));

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


console.log("\n2. Product Management - Second Seller");
const tablet = seller2.createProduct("Tablet Pro", 899.99, 15, 0);
const watch = seller2.createProduct("Smart Watch", 299.99, 30, 15);
console.log("\nInitial Products:");
console.log(seller2.viewProducts());

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

// Customer Order Details
console.log("\n📦 ORDER SUMMARY");
console.log("-".repeat(50));
const order2 = new Order(1002);
const orderItem3 = new OrderItem(laptop, 2);
const orderItem4 = new OrderItem(phone, 1);
order2.addOrderItem(orderItem3);
order2.addOrderItem(orderItem4);
order2.applyDiscount(10);
order2.setDeliveryFee(15);

console.log("Items in Cart:");
order2.getOrderItems().forEach(item => {
    console.log(`• ${item.getProduct().getProductName()} (${item.getQuantity()} units)`);
});
console.log("\nPrice Breakdown:");
console.log(`Items Subtotal     : $${order2.calculateTotalPrice()}`);
console.log(`Discount Applied   : ${order2.getDiscountApplied()}%`);
console.log(`Delivery Fee       : $${order2.getDeliveryFee()}`);
console.log(`Final Total        : $${order2.calculateTotalPrice()}`);

// Seller Dashboard
console.log("\n🏪 SELLER DASHBOARD - " + seller1.getName());
console.log("-".repeat(50));
const sellerProducts = [laptop, phone];
const sellerOrders = Order.getAllOrders().filter(order => 
    order.getOrderItems().some(item => 
        sellerProducts.includes(item.getProduct())
    )
);
console.log("Recent Orders:");
sellerOrders.forEach(order => {
    console.log(`\nOrder #${order.getId()}`);
    order.getOrderItems()
        .filter(item => sellerProducts.includes(item.getProduct()))
        .forEach(item => {
            console.log(`• ${item.getProduct().getProductName()} x${item.getQuantity()}`);
        });
});

// Delivery Tracking
console.log("\n🚚 DELIVERY TRACKING");
console.log("-".repeat(50));
const deliveries = [
    new Delivery(1, "TRACK123", "In Transit", deliveryAddress, DeliveryType.EXPRESS),
    new Delivery(2, "TRACK124", "Pending", deliveryAddress, DeliveryType.STANDARD)
];
deliveries.forEach(delivery => {
    console.log("\nShipment Details:");
    console.log(`📦 Tracking Number : ${delivery.getTrackingNumber()}`);
    console.log(`🚛 Delivery Method : ${delivery.getDeliveryType()}`);
    console.log(`📍 Delivery To    : ${delivery.getAddress().getFullAddress()}`);
    console.log(`📋 Status         : ${delivery.getStatus()}`);
});

// Inventory Management
console.log("\n📊 INVENTORY MANAGEMENT");
console.log("-".repeat(50));
[seller1, seller2].forEach(seller => {
    console.log(`\n${seller.getName()} Stock Levels:`);
    seller.getProducts().forEach(product => {
        console.log(`• ${product.getProductName()}: ${product.getStockQuantity()} units in stock`);
    });
});

// Order Modification
console.log("\n✏️  ORDER MODIFICATION");
console.log("-".repeat(50));
console.log("Original Order:");
console.log(`• Items Count: ${order1.getOrderItems().length}`);
console.log(`• Total Amount: $${order1.calculateTotalPrice()}`);

order1.removeOrderItem(phone.getProductId());
console.log("\nUpdated Order:");
console.log(`• Items Count: ${order1.getOrderItems().length}`);
console.log(`• New Total: $${order1.calculateTotalPrice()}`);

// Product Reviews
console.log("\n⭐ CUSTOMER REVIEWS");
console.log("-".repeat(50));
const review = new Review(
    1, // review id
    user1, // user who made the review
    5, // rating
    "Excellent gaming laptop, great performance!",
    new Date() // current date
);

console.log(`Product: ${laptop.getProductName()}`);
console.log(`Rating: ${"⭐".repeat(review.getRating())}`);
console.log(`Customer Feedback: "${review.getComment()}"`);

console.log("\n" + "=".repeat(50));
