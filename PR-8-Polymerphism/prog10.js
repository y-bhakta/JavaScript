class Shipping {
  calculate(order) {
    return 0;
  }
};
class FedEx extends Shipping {
  calculate(order) {
    return `${order.weight * 11} kg`;
  }
};
class BlueDart extends Shipping {
  calculate(order) {
    return `${order.distance * 4} km`;
  }
};
class Delhivery extends Shipping {
  calculate(order) {
    return `${order.weight * 9 + order.distance * 3} units`;
  }
};
function getShippingCost(order, shippingProvider) {
  return shippingProvider.calculate(order);
};
let order = { weight: 5, distance: 65};
console.log("FedEx:", getShippingCost(order, new FedEx()));
console.log("BlueDart:", getShippingCost(order, new BlueDart()));
console.log("Delhivery:", getShippingCost(order, new Delhivery()));