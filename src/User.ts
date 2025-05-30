import { Address } from "./Address";

export class User {
    // Static list to simulate a database
    private static users: User[] = [];

    private user_id: number;
    private password: string; 

    constructor(
        private name: string,
        private email: string,
        private phoneNumber: string,
        private address: Address,
        password: string,
        user_id?: number
    ) {
        this.user_id = user_id ?? Date.now();
        this.password = password;
    }

    // Register the user
    public register(): string {
        // Check if email already exists
        const existingUser = User.users.find(u => u.email === this.email);
        if (existingUser) {
            return "❌ Email already registered. Please log in instead.";
        }

        // Add to the list (simulate saving to DB)
        User.users.push(this);
        return "✅ Registration successful! You can now log in.";
    }

    // Static method: login user
    public static logIn(email: string, password: string): string {
        const foundUser = User.users.find(u => u.email === email);

        if (!foundUser) {
            return "❌ User not found. Please register first.";
        }

        if (foundUser.password !== password) {
            return "❌ Incorrect password. Try again.";
        }

        return `✅ Welcome back, ${foundUser.name}!`;
    }

    // Change password
    public changePassword(oldPassword: string, newPassword: string): string {
        if (this.password !== oldPassword) {
            return "❌ Old password is incorrect.";
        }

        this.password = newPassword;
        return "✅ Password changed successfully!";
    }

    // View order history placeholder
    public viewOrderHistory(): void {
        console.log(`Showing order history for ${this.name}`);
    }

    // Get basic info
    public getUserInfo(): string {
        return `👤 Name: ${this.name}, 📧 Email: ${this.email}, 📞 Phone: ${this.phoneNumber} 🏠 Address: ${this.address.getFullAddress()}`;
    }
}
