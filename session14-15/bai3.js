"use strict";
class MenuItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Table {
    constructor(id, capacity) {
        this.id = id;
        this.capacity = capacity;
        this.available = true;
    }
}

class Reservation {
    constructor(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}

class Order {
    constructor(id, tableId, items) {
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

class Restaurant {
    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }

    addMenuItem(item) {
        this.menu.push(item);
    }

    addTable(table) {
        this.tables.push(table);
    }

    makeReservation(reservation) {
        const table = this.tables.find(t => t.id === reservation.tableId);
        if (table) {
            if (table.available) {
                table.available = false;
                this.reservations.push(reservation);
            } else {
                console.log("This table is already reserved.");
            }
        }
    }

    placeOrder(order) {
        this.orders.push(order);
    }

    function generateBill(tableId) {
        const order = this.orders.find(o => o.tableId === tableId);
        if (order) {
            const totalAmount = order.getTotal();
            console.log(`Total amount for Table ${tableId}: $${totalAmount}`);
            // Mark the table as available after payment
            const table = this.tables.find(t => t.id === tableId);
            if (table) {
                table.available = true;
            }
        } else {
            console.log("No order found for this table.");
        }
    }
}

const restaurant = new Restaurant();
const menuItem1 = new MenuItem(1, "Burger", 10);
const menuItem2 = new MenuItem(2, "Pizza", 15);
restaurant.addMenuItem(menuItem1);
restaurant.addMenuItem(menuItem2);
const table1 = new Table(1, 4);
const table2 = new Table(2, 6);
restaurant.addTable(table1);
restaurant.addTable(table2);

const reservation = new Reservation(1, "John Doe", 1);
restaurant.makeReservation(reservation);
const orderItems = [menuItem1, menuItem2];
const order = new Order(1, 1, orderItems);
restaurant.placeOrder(order);
restaurant.generateBill(1); 