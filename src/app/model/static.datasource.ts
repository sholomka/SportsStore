import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
    ];

    getProducts(): Observable<Product[]> {
        return Observable.from([this.products])
    }
}