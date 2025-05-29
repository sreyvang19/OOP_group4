export class User {
    private user_id : string;
    private name : string;
    private email : string;
    private address : string;

    constructor(user_id: string, name: string, email: string, address: string) {
        this.user_id = user_id;
        this.name = name;
        this.email = email;
        this.address = address;
    }

    public logIn() : void{}
    public logOut() : void{}
    public register() : void{}
    public changePassword() : void{}
    public viewOrderHistory() : void{}
}