import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  //dependency injection
  //We inject CategoryService into the controller using NestJS dependency injection, so that NestJS automatically creates and manages the service instance. This avoids manual instantiation and ensures a single shared instance (singleton) is used across the application

  constructor(private readonly categoryService: CategoryService) {} //NestJS dependency injection constructor → Nest কে বলছে: “এইটা আমার লাগবে”

  @Get()
  getAllCategories() {
    //const categoryService = new CategoryService(); // ❌ manually create
    /**👉 এখানে কী সমস্যা?

প্রতিবার request এ নতুন object তৈরি হচ্ছে
NestJS কিছুই manage করতে পারছে না
memory waste + control নাই
test করা কঠিন */
    return this.categoryService.getCategories();
  }
}

//Behind the scenes
/**NestJS internally একটা system চালায় (DI container)

ধর:

@Injectable() → Nest কে বলে “এইটা injectable class”
@Controller() → Nest দেখে controller লাগবে

constructor এ dependency দেখে:

CategoryService
Nest বলে:
👉 "এইটা লাগবে? ok, আমি already instance বানিয়ে দিছি 
DI pipeline না, এটা বরং:

👉 Dependency graph / container system

Pipeline বলতে middleware → guards → interceptors → pipes এগুলা বুঝায়

🚀 Real-world analogy (easy way)

ধর:

তুই restaurant এ গেলি 🍔

❌ without DI:

তুই নিজে kitchen এ গিয়ে burger বানাচ্ছিস

✅ with DI:

তুই order দিছিস
kitchen (NestJS) already chef ready রাখছে
chef burger বানিয়ে দিচ্ছে

👉 তুই শুধু use করছিস
👉 create/manage করছিস না

NestJS default এ service singleton

মানে:

app start হলে ১টা instance create
সব controller/use case এ share হয়
*/
