import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { Repository } from 'typeorm';
import { CatergoryDto } from './category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryEntity) 
        private categoryRepository:Repository<CategoryEntity>,
    ){}

    async getAllCategories(){
        const categories=await this.categoryRepository.find();
        return categories;
    }
    async getCategory(id:number){
        const category=await this.categoryRepository.findOne({where:{id}});
        return category;
    }

    async createCategory(data:CatergoryDto){
        const {categoryName}=data
        let category=await this.categoryRepository.findOne({where:{categoryName}})
        if(category){
            throw new HttpException("Category exist",HttpStatus.BAD_REQUEST)
        }
        let categoryCreated = await this.categoryRepository.create(data);
        await this.categoryRepository.save(categoryCreated)
        return categoryCreated
    }
}
