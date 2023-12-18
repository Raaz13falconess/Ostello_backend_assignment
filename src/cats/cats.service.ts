import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  async findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  async create(cat: Cat): Promise<Cat> {
    return this.catsRepository.save(cat);
  }
}
