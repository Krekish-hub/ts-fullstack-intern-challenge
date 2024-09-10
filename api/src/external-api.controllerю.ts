import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './entities/cats.entity';

@Controller('api/external')
export class ExternalApiController {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
  ) {}

  @Post('cats')
  async receiveCatData(@Body() catData: any, @Res() res: Response) {
    try {
      const cat = this.catRepository.create(catData);
      await this.catRepository.save(cat);
      res.status(200).json({ message: 'Cat data saved successfully' });
    } catch (error) {
      console.error('Error saving cat data:', error);
      res.status(500).json({ message: 'Error saving cat data' });
    }
  }
}
