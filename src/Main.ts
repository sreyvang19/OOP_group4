import { User } from "./User";
import { Address } from "./Address";
import { Seller } from "./Seller";
import { Delivery } from "./Delivery";
import { DeliveryType } from "./DeliveryType";
import { Product } from "./Product";


let user1 = new User("John Doe", "john@example.com", "09032423", new Address("123 Main St", "Cityville", "12345"), "password123");
console.log(user1.register());
console.log(user1.getUserInfo());






























































































const seller = new Seller("S123", "John's Store");

// Add some orders
seller.addOrder("O001", "P001", 20); 
seller.addOrder("O002", "P002", 10); 

// View orders
seller.viewOrder();

// Update stock (just logs, no inventory tracking)
seller.updateStock("P001", 50);
seller.removeStock("P002", 5); 

const product = new Product("P001", "Laptop", 999.99, 50, 10);

// Create product
product.createProduct();

// View product
console.log(product.viewProduct());

// Update product details
product.updateProduct("Gaming Laptop", 1099.99, 40, 15);

// Adjust stock
product.adjustStock(20); // Add 20 units
product.adjustStock(-10); // Remove 10 units

// Try invalid stock reduction
product.adjustStock(-100);

// View updated product
console.log(product.viewProduct());


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
