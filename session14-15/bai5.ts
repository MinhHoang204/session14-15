class Transaction {
    id: number;
    type: string;
    amount: number;
    newBalance: number;

    constructor(id: number, type: string, amount: number, newBalance: number) {
        this.id = id;
        this.type = type;
        this.amount = amount;
        this.newBalance = newBalance;
    }
}

class account3 {
    accountNumber: string;
    balance: number;
    history: Transaction[];

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
    }

    deposit(amount: number): void {
        this.balance += amount;
        this.history.push(new Transaction(this.history.length + 1, 'deposit', amount, this.balance));
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.history.push(new Transaction(this.history.length + 1, 'withdraw', amount, this.balance));
        } else {
            console.log("Không đủ tiền trong tài khoản.");
        }
    }

    transfer(otherAccount: Account, amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            otherAccount.deposit(amount);
            this.history.push(new Transaction(this.history.length + 1, 'transfer', amount, this.balance));
        } else {
            console.log("Không đủ tiền trong tài khoản.");
        }
    }

    showHistory(): void {
        console.log("Lịch sử giao dịch:");
        for (const transaction of this.history) {
            console.log(`ID: ${transaction.id}, Loại: ${transaction.type}, Số tiền: ${transaction.amount}, Số dư mới: ${transaction.newBalance}`);
        }
    }
}

const account1 = new Account("123456", 1000);
account1.deposit(500);
account1.withdraw(200);
const account2 = new Account("789012", 2000);
account2.transfer(account3, 300);
account3.showHistory();