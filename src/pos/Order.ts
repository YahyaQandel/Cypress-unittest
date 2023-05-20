import { OrderStatus } from "./OrderStatus";
import { OrderItem } from "./OrderItem";

export class Order {
    private totalPrice: number = 0;
    private orderStatus: OrderStatus = OrderStatus.OPENED;
    private items: OrderItem[] = [];

    get Items() {
        return this.items;
    }

    get itemsCount() {
        return this.items.length;
    }

    get TotalPrice() {
        return this.totalPrice;
    }

    get OrderStatus() {
        return this.orderStatus;
    }

    addItem(item: OrderItem) {
        this.items.push(item);
        this.totalPrice += item.Price;
    }

    removeItem(item: OrderItem) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
            this.totalPrice -= item.Price;
        }
    }

    proceedToCheckout(userBalance: number) {
        this.orderStatus = OrderStatus.PENDING_CHECKOUT;
        if (userBalance < this.totalPrice) {
            throw new Error('Insufficient balance to proceed to checkout');
        }
        if (this.items.length === 0) {
            throw new Error('Cannot proceed to checkout with an empty order');
        }
        this.orderStatus = OrderStatus.PLACED;
    }

    toString() {
        return `Order: ${this.itemsCount} items, total price: ${this.totalPrice}`;
    }

    cancelOrder() {
        this.orderStatus = OrderStatus.CANCELED;
    }
}