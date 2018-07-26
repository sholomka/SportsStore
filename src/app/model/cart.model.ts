import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {
    public lines : CartLine[] = [];
    public itemCount: number = 0;
    public cartPrice: number = 0;

    addLine(product: Product, quantity: number = 1) {
        // let line = this.lines.find(line => line)
    }

    updateQuantity() {}
    removeLine() {}
    clear() {}
    private recalculate() {}

}

export class CartLine {
    constructor() {}
    get lineTotal() {
        return;
    }
}