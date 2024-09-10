import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './entities/cats.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catsRepository: Repository<Cat>,
  ) {}

  async toggleFavorite(id: string): Promise<void> {
    const cat = await this.catsRepository.findOne({ where: { id } });
    if (!cat) {
      throw new Error(`Cat with ID ${id} not found`);
    }

    cat.isFavorite = !cat.isFavorite;

    await this.catsRepository.save(cat);
  }

  async saveFavorite(catData: { id: string; isFavorite: boolean }): Promise<void> {
    const cat = await this.catsRepository.findOne({ where: { id: catData.id } });
    if (!cat) {
      throw new Error(`Cat with ID ${catData.id} not found`);
    }

    cat.isFavorite = catData.isFavorite;

    await this.catsRepository.save(cat);
  }
}
