class product2 {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class CartProduct extends product2 {
    quantity: number;

    constructor(id: number, name: string, price: number, quantity: number) {
        super(id, name, price);
        this.quantity = quantity;
    }

    calculatePrice(): number {
        return this.price * this.quantity;
    }

    increaseQuantity(): void {
        this.quantity++;
    }

    decreaseQuantity(): void {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }
}

class ShopProduct extends product2 {
    stock: number;

    constructor(id: number, name: string, price: number, stock: number) {
        super(id, name, price);
        this.stock = stock;
    }
}

class Cart {
    items: CartProduct[];

    constructor() {
        this.items = [];
    }

    addItem(product: ShopProduct, quantity: number): void {
        if (quantity <= product.stock) {
            const cartProduct = new CartProduct(product.id, product.name, product.price, quantity);
            this.items.push(cartProduct);
        } else {
            console.log("Not enough stock to add this item to the cart.");
        }
    }

    removeItem(cartProduct: CartProduct): void {
        const index = this.items.indexOf(cartProduct);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    getTotal(): number {
        let total = 0;
        for (const cartProduct of this.items) {
            total += cartProduct.calculatePrice();
        }
        return total;
    }
}

const product1 = new ShopProduct(1, "Phone", 500, 10);
const cart = new Cart();
cart.addItem(product1, 2);
console.log(cart.items); 
console.log("Total price:", cart.getTotal()); 