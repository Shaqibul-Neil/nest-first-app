import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    { id: '1', name: 'Product 1' },
    { id: '2', name: 'Product 2' },
  ];
  getAllProducts() {
    return this.products;
  }
  getProductsById(id: string) {
    return this.products.find((product) => product.id === id);
  }
}
