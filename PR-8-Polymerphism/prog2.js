class Payment {
    pay(amount) {
        console.log(`You are Paying ${amount}`);
    }
};
class CreditCard extends Payment {
    pay(amount) {
        console.log(`You Paid ${amount} using Credit Card.`);
    }
};
class PayPal extends Payment {
    pay(amount) {
        console.log(`You Paid ${amount} using PayPal.`);
    }
};
let payments = [new CreditCard(), new PayPal()];
payments.forEach(p => p.pay(200));