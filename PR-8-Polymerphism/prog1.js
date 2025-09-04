class Notification {
    send(message) {
        console.log("Sending notification:", message);
    }
};
class EmailNotification extends Notification {
    send(message) {
        console.log("This Email sent this message:", message);
    }
};
class SMSNotification extends Notification {
    send(message) {
        console.log("This SMS sent thus message:", message);
    }
};
let notifyUsers = [new EmailNotification(), new SMSNotification()];
notifyUsers.forEach(num => num.send("Your order has been shipped!"));