import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { createCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getAll() {
    return this.customerService.getAllCustomers();
  }

  @Post()
  add(@Body() data: createCustomerDto) {
    return this.customerService.addCustomer(data);
  }
}
