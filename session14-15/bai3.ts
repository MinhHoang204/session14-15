class MenuItem {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Table {
    id: number;
    capacity: number;
    available: boolean;

    constructor(id: number, capacity: number) {
        this.id = id;
        this.capacity = capacity;
        this.available = true; 
    }
}

class Reservation {
    id: number;
    customerName: string;
    tableId: number;

    constructor(id: number, customerName: string, tableId: number) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}

class Order {
    id: number;
    tableId: number;
    items: MenuItem[];

    constructor(id: number, tableId: number, items: MenuItem[]) {
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }

    getTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

class Restaurant {
    menu: MenuItem[];
    tables: Table[];
    reservations: Reservation[];
    orders: Order[];

    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }

    addMenuItem(item: MenuItem): void {
        this.menu.push(item);
    }

    addTable(table: Table): void {
        this.tables.push(table);
    }

    makeReservation(reservation: Reservation): void {
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

    placeOrder(order: Order): void {
        this.orders.push(order);
    }

    generateBill(tableId: number): void {
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