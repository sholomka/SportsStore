import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(1, "Product 2", "Category 1", "Product 2 (Category 1)", 100),
        new Product(1, "Product 3", "Category 1", "Product 3 (Category 1)", 100),
        new Product(1, "Product 4", "Category 1", "Product 4 (Category 1)", 100),
        new Product(1, "Product 5", "Category 1", "Product 5 (Category 1)", 100),
        new Product(1, "Product 6", "Category 2", "Product 6 (Category 2)", 100),
        new Product(1, "Product 7", "Category 2", "Product 7 (Category 2)", 100),
        new Product(1, "Product 8", "Category 2", "Product 8 (Category 2)", 100),
        new Product(1, "Product 9", "Category 2", "Product 9 (Category 2)", 100),
        new Product(1, "Product 10", "Category 3", "Product 10 (Category 3)", 100),
        new Product(1, "Product 11", "Category 3", "Product 11 (Category 3)", 100),
        new Product(1, "Product 12", "Category 3", "Product 12 (Category 3)", 100),
        new Product(1, "Product 13", "Category 3", "Product 13 (Category 3)", 100),
        new Product(1, "Product 14", "Category 3", "Product 14 (Category 3)", 100),
        new Product(1, "Product 15", "Category 3", "Product 15 (Category 3)", 100),
    ];

    getProducts(): Observable<Product[]> {
        return Observable.from([this.products])
    }
}