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

    it.skip('should remove an item from the order', () => {
        // write your test here
    });

    it.skip('should add an item  to the order multiple times', () => {
       // write your test here
    });

    it.skip('should not proceed to checkout if user balance is insufficient', () => {
       // write your test here
    });
});