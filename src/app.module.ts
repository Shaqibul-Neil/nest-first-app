import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { CategoryModule } from './category/category.module';
import { StudentsModule } from './students/students.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';

@Module({
  imports: [
    UserModule,
    ProductsModule,
    CategoryModule,
    StudentsModule,
    CustomerModule,
  ],
  controllers: [
    AppController,
    UserController,
    ProductsController,
    CustomerController,
  ],
  providers: [AppService, UserService, ProductsService, CustomerService],
})
export class AppModule {}
