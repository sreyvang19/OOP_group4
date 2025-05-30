import { User } from "./User";
import { Address } from "./Address";
import { Seller } from "./Seller";


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
