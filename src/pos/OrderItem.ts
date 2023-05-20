export class OrderItem {
    private id: number = 0;
    private price: number;
    private name: string;
    private qty: number = 0;

    constructor(itemName: string, itemPrice: number) {
        this.price = itemPrice;
        this.name = itemName;
    }

    get ID() {
        return this.id;
    }

    set ID(id: number) {
        this.id = id;
    }

    get Price() {
        return this.price;
    }

    set Price(price: number) {
        this.price = price;
    }

    get Name() {
        return this.name;
    }

    set Name(name: string) {
        this.name = name;
    }

    get Qty() {
        return this.qty;
    }

    set Qty(qty: number) {
        this.qty = qty;
    }

}