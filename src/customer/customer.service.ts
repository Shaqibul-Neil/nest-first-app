import { Injectable } from '@nestjs/common';
import { TCustomer } from './interfaces/customer.interface';
import { createCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  private readonly customers: TCustomer[] = [
    { id: '1', name: 'John Doe', age: 30 },
    { id: '2', name: 'Jane Doe', age: 40 },
  ];

  getAllCustomers(): TCustomer[] {
    return this.customers;
  }
  addCustomer(data: createCustomerDto): TCustomer {
    const newCustomer: TCustomer = { id: Date.now().toString(), ...data };
    this.customers.push(newCustomer);
    return newCustomer;
  }
}
