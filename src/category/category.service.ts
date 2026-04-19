import { Injectable } from '@nestjs/common';

@Injectable() //Nest কে বলছে: “এই class inject করা যাবে”
export class CategoryService {
  getCategories() {
    return ['Mobile', 'Laptop', 'Tablet'];
  }
}
