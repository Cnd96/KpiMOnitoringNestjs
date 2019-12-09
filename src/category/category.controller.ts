import { Controller, Get, Post, UsePipes, Body, HttpCode } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ValidationPipe } from '../_shared/validation.pipe';
import { CatergoryDto } from './category.dto';

@Controller('api/category')
export class CategoryController {
    constructor(private categoryService:CategoryService){}
    @Get()
    @HttpCode(200)
    getAllCategories(){
       return this.categoryService.getAllCategories()
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    createUser(@Body() data:CatergoryDto){
        return  this.categoryService.createCategory(data)
    }
}
