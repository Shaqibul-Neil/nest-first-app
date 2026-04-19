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

@Module({
  imports: [UserModule, ProductsModule, CategoryModule, StudentsModule],
  controllers: [AppController, UserController, ProductsController],
  providers: [AppService, UserService, ProductsService],
})
export class AppModule {}
