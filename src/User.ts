import { Address } from "./Address";

export class User {
    // Static list to simulate a database
    private static users: User[] = [];
    private orderHistory: string[] = [];
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

    //Static method: Log-out

    public static logOut(email: string): string {
        const foundUser = User.users.find(u => u.email === email);

        if (!foundUser) {
            return "❌ User not found. Please register first.";
        }

        // Simulate logging out
        return `✅ ${foundUser.name} has been logged out.`;
    }

    //ViewHistory Order
    public viewOrderHistory(): string {
        if (this.orderHistory.length === 0) {
            return "📦 No orders found in your history.";
        }
        return "📦 Order History:\n" + this.orderHistory.map((order, idx) => `${idx + 1}. ${order}`).join('\n');
    }

    // Get basic info
    public getUserInfo(): string {
        return `👤 Name: ${this.name}, 📧 Email: ${this.email}, 📞 Phone: ${this.phoneNumber} 🏠 Address: ${this.address.getFullAddress()}`;
    }
}
