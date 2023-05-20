import { expect } from "chai";
import { Order } from "../../src/pos/Order";
import { OrderItem } from "../../src/pos/OrderItem";

describe('Testing Order', () => {
    it('should add an item to the order', () => {
        const order = new Order();
        const orderItem = new OrderItem('Pepsi', 10);
        order.addItem(orderItem);
        expect(order.Items.length).to.equal(1);
        expect(order.TotalPrice).to.equal(10);
    });

    it('should remove an item from the order', () => {
        const order = new Order();
        const pepsi = new OrderItem('Pepsi', 10);
        const water = new OrderItem('Water', 3);
        order.addItem(pepsi);
        order.addItem(water);
        order.removeItem(pepsi);
        for (const item of order.Items) {
            expect(item.Name).to.not.equal('Pepsi');
        }
        expect(order.Items.length).to.equal(1);
        expect(order.TotalPrice).to.equal(3);
    });

    it('should add an item  to the order multiple times', () => {
        const order = new Order();
        const pepsi = new OrderItem('Pepsi', 10);
        order.addItem(pepsi);
        order.addItem(pepsi);
        expect(order.Items.length).to.equal(2);
        expect(order.TotalPrice).to.equal(20);
    });

    it('should not proceed to checkout if user balance is insufficient', () => {
        const order = new Order();
        const pepsi = new OrderItem('Pepsi', 10);
        order.addItem(pepsi);
        expect(() => order.proceedToCheckout(5)).to.throw('Insufficient balance to proceed to checkout');
    });
});