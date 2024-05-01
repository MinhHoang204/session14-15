"use strict";
class Product2 {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class CartProduct extends Product2 {
    constructor(id, name, price, quantity) {
        super(id, name, price);
        this.quantity = quantity;
    }

    calculatePrice() {
        return this.price * this.quantity;
    }

    increaseQuantity() {
        this.quantity++;
    }

    decreaseQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }
}

class ShopProduct extends Product2 {
    constructor(id, name, price, stock) {
        super(id, name, price);
        this.stock = stock;
    }
}

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        if (quantity <= product.stock) {
            const cartProduct = new CartProduct(product.id, product.name, product.price, quantity);
            this.items.push(cartProduct);
        } else {
            console.log("Not enough stock to add this item to the cart.");
        }
    }

    removeItem(cartProduct) {
        const index = this.items.indexOf(cartProduct);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    getTotal() {
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