class Payment {
  process(amount) {
    console.log(`Processing payment of ₹${amount}`);
  }
};
class CreditCardPayment extends Payment {
  process(amount) {
    console.log(`Paid ₹${amount} using Credit Card.`);
  }
};
class UPIPayment extends Payment {
  process(amount) {
    console.log(`Paid ₹${amount} using UPI.`);
  }
};
class PayPalPayment extends Payment {
  process(amount) {
    console.log(`Paid ₹${amount} using PayPal.`);
  }
};
function checkout(amount, paymentMethod) {
  paymentMethod.process(amount);
};
checkout(1000, new CreditCardPayment());
checkout(4000, new UPIPayment());
checkout(6000, new PayPalPayment());